import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { GroupController } from './group.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register('CHAT_SERVICE'),
  ],
  controllers: [GroupController],
})
export class GroupModule {}
