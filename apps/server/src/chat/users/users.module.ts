import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { UserController } from './users.controller';
import { Services } from '@apps/chat/utils/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register(Services.USERS),
  ],
  controllers: [UserController],
})
export class UserModule {}
