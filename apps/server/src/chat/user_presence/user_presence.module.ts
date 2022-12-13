import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { UserPresenceController } from './user_presence.controller';
import { Services } from '@apps/chat/utils/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register(Services.USER_PRESENCE),
  ],
  controllers: [UserPresenceController],
})
export class UserPresenceModule {}
