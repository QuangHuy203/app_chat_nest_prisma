import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { FriendController } from './friends.controller';
import { Services } from '@apps/chat/utils/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register(Services.FRIENDS_SERVICE),
  ],
  controllers: [FriendController],
})
export class FriendModule {}
