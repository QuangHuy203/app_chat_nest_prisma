import { Routes, Services } from '@apps/chat/utils/constants';
import { AuthUser } from '@apps/chat/utils/decorators';
import { GetUser, SwaggerController } from '@common/auth/decorator';
import { Body, Controller, Delete, Get, Inject, Logger, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../../../../chat/utils/typeorm';

@SwaggerController(Routes.FRIEND_REQUESTS)
@Controller(Routes.FRIEND_REQUESTS)
export class FriendRequestsController {
  logger = new Logger('Friend Requests');

  constructor(@Inject(Services.FRIENDS_REQUESTS_SERVICE) private client: ClientProxy) {}

  @Get()
  getFriendRequests(@AuthUser() user: User) {
    return this.client.send('get_friend_requests', user);
  }

  @Post()
  createFriendRequest(@GetUser() user: any, @Body() dto: any) {
    return this.client.send('create_friend_request', { user, dto });
  }

  @Patch(':id/accept')
  acceptFriendRequest(
    @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.client.send('accept_friend_request', { id, userId });
  }

  @Delete(':id/cancel')
  cancelFriendRequest(
    @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.client.send('cancel_friend_request', { id, userId });
  }

  @Patch(':id/reject')
  rejectFriendRequest(
    @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.client.send('reject_friend_request', { id, userId });
  }
}
