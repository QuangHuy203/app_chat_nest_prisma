import { Body, Controller, Inject, Param, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Routes, Services } from '../../utils/constants';
import { AuthUser } from '../../utils/decorators';
import { User } from '../../utils/typeorm';
import { UserPresenceDto } from '../dtos/user-presence.dto';
import { IUserPresenceService } from '../interfaces/user-presence';

// TODO: show guard when auth done
// @UseGuards(AuthenticatedGuard)
@Controller(Routes.USER_PRESENCE)
export class UserPresenceController {
  constructor(
    @Inject(Services.USER_PRESENCE)
    private readonly userPresenceService: IUserPresenceService,
  ) {}

  /**
   * new record with user presence dto
   * @param dto
   * @returns
   */
  @MessagePattern('create-presence')
  async createPresence(dto: UserPresenceDto) {
    return await this.userPresenceService.createPresence(dto);
  }

  /**
   * update user with user by user presence id and status message
   * @param user
   * @param id
   * @param dto
   * @returns
   */
  @MessagePattern('update-status')
  updateStatus(
    @AuthUser() user: User,
    @Param('id') id: number,
    @Body() dto: UserPresenceDto,
  ) {
    return this.userPresenceService.updateStatus({ user, id, dto });
  }
}
