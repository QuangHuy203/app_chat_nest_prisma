import { HTTP } from '@common/http';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Friend } from '../utils/typeorm';
import { DeleteFriendRequestParams } from '../utils/types';
import { DeleteFriendException } from './exceptions/DeleteFriend';
import { FriendNotFoundException } from './exceptions/FriendNotFound';
import { IFriendsService } from './friends';
import { PrismaServiceFriends } from './prisma/prisma.service';

@Injectable()
export class FriendsService extends HTTP implements IFriendsService {
  constructor(private prisma: PrismaServiceFriends) {
    super();
  }

  async getFriends(id: number): Promise<any> {
    try {
      const response = await this.prisma.friend.findMany({
        where: {
          OR: [
            {
              senderId: id,
            },
            {
              receiverId: id
            }
          ]
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friends.GET_LIST_SUCCESS',
        response,
        1,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async findFriendById(id: number): Promise<any> {
    try {
      const response = await this.prisma.friend.findFirst({
        where: {
          id: id,
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friends.GET_SUCCESS',
        response,
        1,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async deleteFriend({ id, userId }: DeleteFriendRequestParams) {
    try {
      const friend = await this.findFriendById(id);

      if (!friend) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friends.NOT_FOUND',
        );
      }

      if (friend.receiverId !== userId && friend.senderId !== userId) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'friends.NOT_FRIEND',
        );
      }

      await this.prisma.friend.delete({
        where: {
          id: id,
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friends.DELETE_SUCCESS',
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  async isFriends(userOneId: number, userTwoId: number) {
    try {
      const response = await this.prisma.friend.findMany({
        where: {
          OR: [
            {
              senderId: userOneId,
              receiverId: userTwoId
            },
            {
              senderId: userTwoId,
              receiverId: userOneId
            }
          ]
        }
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'friends.IS_FRIEND',
        response,
        1,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }
}
