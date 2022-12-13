import { HTTP } from '@common/http';
import { HttpStatus, Injectable } from '@nestjs/common';
import { UserPresenceDto } from '../dtos/user-presence.dto';
import { IUserPresenceService } from '../interfaces/user-presence';
import { PrismaServiceUserPresence } from '../prisma/prisma.service';

@Injectable()
export class UserPresenceService extends HTTP implements IUserPresenceService {
  constructor(private prisma: PrismaServiceUserPresence) {
    super();
  }

  /**
   * create presence with user presence dto
   * @param dto
   */
  async createPresence(dto: UserPresenceDto) {
    try {
      // request create user presence record and await it
      const response = await this.prisma.userPresence.create({
        data: dto,
      });

      return this.setHttpRequest(
        HttpStatus.OK,
        'users.USER_PRESENCE.CREATED',
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

  /**
   * update status ưiuth user id dto
   * @param params
   * @returns
   */
  async updateStatus({
    user,
    id,
    dto,
  }: {
    user: any;
    id: number;
    dto: UserPresenceDto;
  }) {
    // TODO: test api
    try {
      // check user
      if (!user) {
        return this.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'users.USER_PRESENCE.NOT_FOUND_CURRENT_USER',
        );
      }

      // create presence for current user if null/undefined
      if (!user.presence) {
        user.presence = await this.createPresence(dto);
      }

      // update if exist
      const updated = await this.prisma.user.update({
        data: { presence: { create: { statusMessage: dto.statusMessage } } },
        where: { id: id },
      });

      // response http status
      return this.setHttpRequest(
        HttpStatus.OK,
        'users.USER_PRESENCE.UPDATED',
        updated,
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
