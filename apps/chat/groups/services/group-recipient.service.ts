import { HTTP } from '@common/http';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../../users/interfaces/user';
import { Services } from '../../utils/constants';
import {
  AddGroupRecipientParams,
  CheckUserGroupParams,
  LeaveGroupParams,
  RemoveGroupRecipientParams,
} from '../../utils/types';
import { GroupNotFoundException } from '../exceptions/GroupNotFound';
import { GroupParticipantNotFound } from '../exceptions/GroupParticipantNotFound';
import { NotGroupOwnerException } from '../exceptions/NotGroupOwner';
import { IGroupRecipientService } from '../interfaces/group-recipient';
import { PrismaServiceGroup } from '../prisma/prisma.service';

@Injectable()
export class GroupRecipientService implements IGroupRecipientService {
  constructor(
    private prisma: PrismaServiceGroup,
    @Inject(Services.USERS) private userService: IUserService,
    private http: HTTP,
  ) {}

  async addGroupRecipient(params: AddGroupRecipientParams): Promise<any> {
    const group = await this.prisma.groups.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!group) throw new GroupNotFoundException();
    if (group.ownerId !== params.userId)
      throw new HttpException('Insufficient Permissions', HttpStatus.FORBIDDEN);
    const recipient = await this.userService.findUser({
      username: params.username,
    });
    if (!recipient) {
      throw new HttpException('Cannot Add User', HttpStatus.BAD_REQUEST);
    }
    const userInGroup = await this.isUserInGroup({
      id: group.id,
      userId: recipient.id,
    });
    if (userInGroup) {
      throw new HttpException('User already in group', HttpStatus.BAD_REQUEST);
    }

    const savedGroup = await this.prisma.usersGroups.create({
      data: {
        groupsId: group.id,
        usersId: recipient.id,
      },
      select: {
        users: true,
        groups: true,
      },
    });
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Add recipient successfully',
      { group: savedGroup.groups, user: savedGroup.users },
    );
  }

  /**
   * Removes a Group Recipient as a Group Owner.
   * Does not allow users to leave the group.
   * @param params RemoveGroupRecipientParams
   * @returns Promise<Group>
   */
  async removeGroupRecipient(params: RemoveGroupRecipientParams): Promise<any> {
    const { issuerId, removeUserId, id } = params;
    const userToBeRemoved = await this.userService.findUser({
      id: removeUserId,
    });
    if (!userToBeRemoved)
      throw new HttpException('User cannot be removed', HttpStatus.BAD_REQUEST);
    const group = await this.prisma.groups.findUnique({
      where: {
        id,
      },
      include: {
        users_groups: {
          select: {
            users: true,
          },
        },
      },
    });
    if (!group) throw new GroupNotFoundException();
    // Not group owner
    if (group.ownerId !== issuerId) throw new NotGroupOwnerException();
    // Temporary
    if (group.ownerId === removeUserId)
      throw new HttpException(
        'Cannot remove yourself as owner',
        HttpStatus.BAD_REQUEST,
      );
    const savedGroup = await this.prisma.usersGroups.delete({
      where: {
        groupsId_usersId: {
          groupsId: group.id,
          usersId: removeUserId,
        },
      },
    });
    const groupUpdated = await this.prisma.groups.findUnique({
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
    const group_user = groupUpdated.users_groups.map(
      user => Object.values(user)[0],
    );
    groupUpdated.users_groups = undefined;
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Add recipient successfully',
      { ...groupUpdated, users: group_user },
    );
  }

  async isUserInGroup({ id, userId }: CheckUserGroupParams): Promise<any> {
    const group = await this.prisma.groups.findUnique({
      where: {
        id,
      },
      select: {
        users_groups: {
          select: {
            users: true,
          },
        },
      },
    });
    if (!group) throw new GroupNotFoundException();

    const user = group.users_groups.find(
      userGroup => userGroup.users.id === userId,
    );
    if (!user) throw new GroupParticipantNotFound();
    return group;
  }

  async leaveGroup({ id, userId }: LeaveGroupParams) {
    const group = await this.isUserInGroup({ id, userId });
    console.log(`Updating Groups`);
    if (group.ownerId === userId)
      throw new HttpException(
        'Cannot leave group as owner',
        HttpStatus.BAD_REQUEST,
      );
    console.log('New Users in Group after leaving...');
    const savedGroup = await this.prisma.usersGroups.delete({
      where: {
        groupsId_usersId: {
          groupsId: group.id,
          usersId: userId,
        },
      },
    });
    return this.http.setHttpRequest(HttpStatus.OK, 'Leave group successfully');
  }
}
