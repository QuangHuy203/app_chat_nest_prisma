import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { GroupRecipientController } from './group_recipient.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register('CHAT_SERVICE'),
  ],
  controllers: [GroupRecipientController],
})
export class GroupRecipientModule {}
