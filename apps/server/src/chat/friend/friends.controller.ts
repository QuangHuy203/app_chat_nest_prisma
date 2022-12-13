import { Routes, Services } from '@apps/chat/utils/constants';
import { AuthUser } from '@apps/chat/utils/decorators';
import { SwaggerController } from '@common/auth/decorator';
import { Controller, Delete, Get, Inject, Logger, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../../../../chat/utils/typeorm';

@SwaggerController(Routes.FRIENDS)
@Controller(Routes.FRIENDS)
export class FriendController {
  logger = new Logger('Friends');

  constructor(@Inject(Services.FRIENDS_SERVICE) private client: ClientProxy) {}

  @Get()
  getFriends(@AuthUser() user: User) {
    return this.client.send('get-friends', user);
  }

  @Delete(':id/delete')
  deleteFriend(
    @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.client.send('delete-friend', { id, userId });
  }
}
