import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@common/redis';
import { ChatController } from '@apps/server/src/chat/chat.controller';
import { UserPresenceModule } from './user_presence/user_presence.module';
import { GroupModule } from './groups/group.module';
import { GroupMessageModule } from './group_messages/group_message.module';
import { GroupRecipientModule } from './group_recipients/group_recipient.module';
import { UserModule } from './users/users.module';
import { FriendModule } from './friend/friends.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { FriendRequestsModule } from './friend_requests/friend_requests.module';
import { AuthModule } from './auth/auth.module';
import { UserProfileModule } from './user_profile/user_profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.register('CHAT_SERVICE'),
    UserPresenceModule,
    UserModule,
    GroupModule,
    GroupMessageModule,
    GroupRecipientModule,
    FriendModule,
    ConversationsModule,
    MessagesModule,
    FriendRequestsModule,
    AuthModule,
    UserProfileModule
  ],
  controllers: [ChatController],
})
export class ChatModule {}
