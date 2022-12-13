import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { FriendRequestsController } from './friend_requests.controller';
import { Services } from '@apps/chat/utils/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register(Services.FRIENDS_REQUESTS_SERVICE),
  ],
  controllers: [FriendRequestsController],
})
export class FriendRequestsModule {}
