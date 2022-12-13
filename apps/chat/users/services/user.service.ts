import { HTTP } from '@common/http';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hashPassword } from '../../utils/helpers';
import { CreateUserDetails } from '../../utils/types';
import { IUserService } from '../interfaces/user';
import { PrismaServiceUserPresence } from '../prisma/prisma.service';

@Injectable()
export class UserService extends HTTP implements IUserService {
  constructor(private prisma: PrismaServiceUserPresence) {
    super();
  }

  /**
   * create user
   * @param userDetails
   * @returns
   */
  async createUser(userDetails: CreateUserDetails) {
    try {
      const existingUser = await this.prisma.user.findFirst({
        where: {
          username: userDetails.username,
        },
      });

      if (existingUser)
        return this.setHttpRequest(HttpStatus.CONFLICT, 'users.USER.EXISTED');

      const password = await hashPassword(userDetails.password);
      const peer = this.prisma.peer.create({ data: {} });
      const params = { ...userDetails, password, peerId: (await peer).id };
      const newUser = await this.prisma.user.create({ data: { ...params } });
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'users.USER.CREATED',
        newUser,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  /**
   * find user
   * @param id
   * @returns
   */
  async findUser({ username }) {
    try {
      const response = await this.prisma.user.findFirst({
        select: {
          username: true,
          firstName: true,
          lastName: true,
          id: true,
        },
        where: {
          username: username,
        },
        // relations: ['profile', 'presence', 'peer'],
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'users.USER.FIND_USER_SUCCESS',
        response,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }

  /**
   * search users by query
   * @param query
   * @returns
   */
  async searchUsers(params: any) {
    try {
      let page = -1,
        limit = -1;

      const data: any = {};
      if (params.username) {
        data.username = { contains: params.username };
      }
      if (params.firstname) {
        data.firstName = { contains: params.firstname };
      }
      if (params.lastname) {
        data.lastName = { contains: params.lastname };
      }
      if (params.page) {
        page = parseInt(params.page);
      }
      if (params.limit) {
        limit = parseInt(params.page);
      }

      const response = await this.prisma.user.findMany({
        where: data,
        take: limit,
        skip: page * limit,
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'users.USER.SEARCH_USER_SUCCESS',
        response,
      );
    } catch (error) {
      return this.setHttpRequest(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'systems.INTERNAL_SERVER_ERROR',
      );
    }
  }
}
