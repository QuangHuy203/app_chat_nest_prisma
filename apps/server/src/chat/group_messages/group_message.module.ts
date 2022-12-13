import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { GroupMessageController } from './group_message.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register('CHAT_SERVICE'),
  ],
  controllers: [GroupMessageController],
})
export class GroupMessageModule {}
