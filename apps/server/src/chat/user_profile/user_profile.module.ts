import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { UserProfileController } from './user_profile.controller';
import { Services } from '@apps/chat/utils/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register(Services.USERS_PROFILES),
  ],
  controllers: [UserProfileController],
})
export class UserProfileModule {}
