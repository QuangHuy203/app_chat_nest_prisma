import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { MessagesController } from '@apps/server/src/chat/messages/messages.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register('CHAT_SERVICE'),
  ],
  controllers: [MessagesController],
})
export class MessagesModule {}
