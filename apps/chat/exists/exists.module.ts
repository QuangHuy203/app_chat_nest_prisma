import { Module } from '@nestjs/common';
import { ConversationsModule } from '../conversations/src/conversations.module';
import { UsersModule } from '../users/users.module';
import { ExistsController } from './exists.controller';

@Module({
  imports: [ConversationsModule, UsersModule],
  controllers: [ExistsController],
  providers: [],
})
export class ExistsModule {}
