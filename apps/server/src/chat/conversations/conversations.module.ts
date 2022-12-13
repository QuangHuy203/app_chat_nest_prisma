import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { ConversationsController } from '@apps/server/src/chat/conversations/conversations.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register('CHAT_SERVICE'),
  ],
  controllers: [ConversationsController],
})
export class ConversationsModule {}
