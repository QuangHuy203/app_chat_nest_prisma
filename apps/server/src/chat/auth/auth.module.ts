import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { AuthController } from './auth.controller';
import { Services } from '@apps/chat/utils/constants';
import { AuthModuleCommon } from '@common/auth';

@Module({
  imports: [
    AuthModuleCommon,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register(Services.AUTH),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
