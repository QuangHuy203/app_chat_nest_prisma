import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Routes } from '../../../../chat/utils/constants';

@Controller(Routes.GROUP_RECIPIENTS)
export class GroupRecipientController {
  logger = new Logger('Group recipient');

  constructor(@Inject('CHAT_SERVICE') private client: ClientProxy) {}

  @Post()
  async addGroupRecipient(
    // @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) groupId: number,
    @Body() { username }: any
  ) {
    this.logger.log('Add group recipient');
    const params = { id: groupId, userId: 1, username };
    return this.client.send('add_group_recipient', params);
  }

  /**
   * Leaves a Group
   * @param user the authenticated User
   * @param groupId the id of the group
   * @returns the updated Group that the user had left
   */
  @Delete('leave')
  async leaveGroup(
    // @AuthUser() user: User,
    @Param('id', ParseIntPipe) groupId: number
  ) {
    this.logger.log('Recipients leaves');
    return this.client.send('group_recipient_leave', {
      id: groupId,
      userId: 1,
    });
  }

  @Delete(':userId')
  async removeGroupRecipient(
    // @AuthUser() { id: issuerId }: User,
    @Param('id', ParseIntPipe) groupId: number,
    @Param('userId', ParseIntPipe) removeUserId: number
  ) {
    this.logger.log('Remove group recipient');
    const params = { issuerId: 1, id: groupId, removeUserId };
    return this.client.send('remove_group_recipient', params);
  }
}
