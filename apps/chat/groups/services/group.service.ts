import { HTTP } from '@common/http';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IImageStorageService } from '../../image-storage/image-storage';
import { UserNotFoundException } from '../../users/exceptions/UserNotFound';
import { IUserService } from '../../users/interfaces/user';
import { Services } from '../../utils/constants';
import { generateUUIDV4 } from '../../utils/helpers';
import { Group, User } from '../../utils/typeorm';
import {
  AccessParams,
  Attachment,
  CreateGroupParams,
  FetchGroupsParams,
  TransferOwnerParams,
  UpdateGroupDetailsParams,
} from '../../utils/types';
import { GroupNotFoundException } from '../exceptions/GroupNotFound';
import { GroupOwnerTransferException } from '../exceptions/GroupOwnerTransfer';
import { IGroupService } from '../interfaces/group';
import { PrismaServiceGroup } from '../prisma/prisma.service';

@Injectable()
export class GroupService implements IGroupService {
  constructor(
    private prisma: PrismaServiceGroup,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
    @Inject(Services.IMAGE_UPLOAD_SERVICE)
    private readonly imageStorageService: IImageStorageService,
    private http: HTTP,
  ) {}

  async createGroup(params: CreateGroupParams) {
    const { creator, title, users } = params;
    users.push(creator);
    return await this.prisma.$transaction(async tx => {
      const groupCreated = await tx.groups.create({
        data: { ownerId: +creator, creatorId: +creator, title },
      });
      const filterUser = users.map(user => ({
        groupsId: groupCreated.id,
        usersId: +user,
      }));
      const addUserToGroup = await tx.usersGroups.createMany({
        data: filterUser,
      });
      const group_users = await tx.groups.findFirst({
        where: { id: groupCreated.id },
        select: {
          users_groups: {
            select: {
              users: true,
            },
          },
        },
      });
      const filterGroupUsers = group_users.users_groups.map(
        user => `${user.users.firstName} ${user.users.lastName}`,
      );
      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Create group succesfully',
        {
          title: groupCreated.title,
          users: filterGroupUsers,
        },
      );
    });
  }

  async getGroups(payload: { userId: number }): Promise<any> {
    // const a = this.prisma.groups
    //   .createQueryBuilder('group')
    //   .leftJoinAndSelect('group.users', 'user')
    //   .where('user.id IN (:users)', { users: [params.userId] })
    //   .leftJoinAndSelect('group.users', 'users')
    //   .leftJoinAndSelect('group.creator', 'creator')
    //   .leftJoinAndSelect('group.owner', 'owner')
    //   .leftJoinAndSelect('group.lastMessageSent', 'lastMessageSent')
    //   .leftJoinAndSelect('users.profile', 'usersProfile')
    //   .leftJoinAndSelect('users.presence', 'usersPresence')
    //   .orderBy('group.lastMessageSentAt', 'DESC')
    //   .getMany();
    try {
      const groups = await this.prisma.groups.findMany({
        where: {
          users_groups: {
            some: {
              usersId: payload.userId,
            },
          },
        },
        include: {
          users_groups: {
            select: {
              users: true,
            },
          },
          owner: true,
          creator: true,
          last_message_sent: true,
        },
      });
      const renameGroupProperties = groups.map(group => {
        group['users'] = group.users_groups;
        delete group.users_groups;
        return group;
      });
      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Create group succesfully',
        renameGroupProperties,
      );
    } catch (err: any) {
      console.log(err);
    }
  }

  async findGroupById(id: number): Promise<any> {
    const group = await this.prisma.groups.findUnique({
      where: { id },
      include: {
        users_groups: {
          select: {
            users: true,
          },
        },
        owner: true,
        creator: true,
        last_message_sent: true,
      },
    });
    const group_user = group.users_groups.map(user => Object.values(user)[0]);
    group.users_groups = undefined;
    return this.http.setHttpRequest(HttpStatus.OK, 'Create group succesfully', {
      ...group,
      users: group_user,
    });
  }

  async saveGroup(group: any): Promise<any> {
    return await this.prisma.groups.create({ data: group });
  }

  async hasAccess({ id, userId }: AccessParams): Promise<User | undefined> {
    const group = await this.findGroupById(id);
    if (!group) throw new GroupNotFoundException();
    return group.users.find(user => user.id === userId);
  }

  async transferGroupOwner({
    userId,
    groupId,
    newOwnerId,
  }: TransferOwnerParams): Promise<any> {
    const group = await this.findGroupById(groupId);
    if (!group) throw new GroupNotFoundException();
    if (group.ownerId !== userId)
      throw new GroupOwnerTransferException('Insufficient Permissions');
    if (group.ownerId === newOwnerId)
      throw new GroupOwnerTransferException(
        'Cannot Transfer Owner to yourself',
      );
    // const newOwner = await this.userService.findUser({ id: newOwnerId });
    // if (!newOwner) throw new UserNotFoundException();
    const res = await this.prisma.groups.update({
      where: {
        id: group.id,
      },
      data: {
        ownerId: newOwnerId,
      },
      include: {
        users_groups: {
          select: {
            users: true,
          },
        },
        owner: true,
        creator: true,
        last_message_sent: true,
      },
    });
    const group_user = res.users_groups.map(user => Object.values(user)[0]);
    res.users_groups = undefined;
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Transfer group owner succesfully',
      {
        ...res,
        users: group_user,
      },
    );
  }

  async updateDetails(params: UpdateGroupDetailsParams): Promise<any> {
    const group = await this.findGroupById(params.id);
    if (!group) throw new GroupNotFoundException();
    if (params.avatar) {
      const key = generateUUIDV4();
      await this.imageStorageService.upload({ key, file: params.avatar });
      group.avatar = key;
    }
    group.title = params.title ?? group.title;
    const res = await this.prisma.groups.update({
      where: {
        id: group.id,
      },
      data: {
        title: group.title,
      },
      include: {
        users_groups: {
          select: {
            users: true,
          },
        },
        owner: true,
        creator: true,
        last_message_sent: true,
      },
    });
    const group_user = res.users_groups.map(user => Object.values(user)[0]);
    res.users_groups = undefined;
    return this.http.setHttpRequest(HttpStatus.OK, 'Update group succesfully', {
      ...res,
      users: group_user,
    });
  }
}
