import { HTTP } from '@common/http';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { setReporterAutoRun } from 'pactum/src/exports/settings';
import { IFriendsService } from '../friends/friends';
import { IUserService } from '../users/interfaces/user';
import { Services } from '../utils/constants';
import {
  CancelFriendRequestParams,
  CreateFriendParams,
  FriendRequestParams,
} from '../utils/types';
import { IFriendRequestService } from './friend-requests';
import { PrismaServiceFriendReuests } from './prisma/prisma.service';

@Injectable()
export class FriendRequestService extends HTTP implements IFriendRequestService {
  constructor(
    @Inject(Services.USERS)
    private readonly userService: IUserService,
    @Inject(Services.FRIENDS_SERVICE)
    private readonly friendsService: IFriendsService,
    private prisma: PrismaServiceFriendReuests
  ) {
    super();
  }

  async getFriendRequests(id: number): Promise<any> {
    try {
      const status = 'pending';
      const friendRequest = await this.prisma.friendRequest.findMany({
        where: {
          OR: [
            {
              senderId: id,
              status: status
            },
            {
              receiverId: id,
              status: status
            }
          ]
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friendRequests.GET_LIST_SUCCESS',
        friendRequest,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async cancel({ id, userId }: CancelFriendRequestParams) {
    try {
      const friendRequest = await this.prisma.friendRequest.findFirst({
        where: {
          id: id,
        }
      });

      if (!friendRequest || friendRequest.senderId !== userId) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.NOT_FOUND',
        );
      }

      await this.prisma.friendRequest.deleteMany({
        where: {
          id: id,
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friendRequests.DELETE_SUCCESS',
      );

    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async create({ user: sender, username }: CreateFriendParams) {
    try {
      const receiver = await this.userService.findUser({ username });

      if (!receiver) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.NOT_FOUND',
        );
      }

      const exists = await this.isPending(sender.id, receiver.id);

      if (exists) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.IS_PENDING',
        );
      }

      if (receiver.id === sender.id) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.CANT_ADD_YOURSELF',
        );
      }

      const isFriends = await this.friendsService.isFriends(
        sender.id,
        receiver.id,
      );

      if (isFriends) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.ALREADY_FRIEND',
        );
      }

      const friend = await this.prisma.friendRequest.create({
        data: {
          senderId: sender.id,
          receiverId: receiver.id,
          status: 'pending'
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friendRequests.CREATE_SUCCESS',
        friend
      );

    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async accept({ id, userId }: FriendRequestParams) {
    try { 
      const friendRequest = await this.findById(id);

      if (!friendRequest || friendRequest.receiverId !== userId) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.NOT_FOUND',
        );
      }

      if (friendRequest.status === 'accepted') {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.ACCEPTED',
        );
      }

      const updatedFriendRequest = await this.prisma.friendRequest.updateMany({
        where: {
          id: id,
        },
        data: {
          status: 'accepted',
        }
      });

      const newFriend = await this.prisma.friend.create({
        data : {
          senderId: friendRequest.senderId,
          receiverId: friendRequest.receiverId
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friendRequests.ACCEPT_SUCCESS',
        newFriend,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async reject({ id, userId }: CancelFriendRequestParams) {
    try {
      const friendRequest = await this.findById(id);

      if (!friendRequest || friendRequest.receiver.id !== userId) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.NOT_FOUND',
        );
      }

      if (friendRequest.status === 'accepted') {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friendRequests.ACCEPTED',
        );
      }
      
      const updateRequest = await this.prisma.friendRequest.updateMany({
        where: {
          id: id,
        },
        data: {
          status: 'rejected',
        }
      });
      
      return this.setHttpRequest(
        HttpStatus.OK,
        'friendRequests.REJECT_SUCCESS',
        updateRequest
      );

    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async isPending(userOneId: number, userTwoId: number) {
    try {
        return await this.prisma.friendRequest.findFirst({
        where: {
          OR: [
            {
              senderId: userOneId,
              receiverId: userTwoId,
              status: 'pending',
            },
            {
              senderId: userTwoId,
              receiverId: userOneId,
              status: 'pending',
            }
          ],
        }
      });
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async findById(id: number): Promise<any> {
    try {
      return this.prisma.friendRequest.findFirst({
        where: {
          id: id,
        }
      });
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }
}
