import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConversationsModule } from './conversations/src/conversations.module';
import { MessagesModule } from './messages/src/messages.module';
import { GatewayModule } from './gateway/gateway.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GroupModule } from './groups/group.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { FriendRequestsModule } from './friend-requests/friend-requests.module';
import { FriendsModule } from './friends/friends.module';
import { EventsModule } from './events/events.module';
import { ExistsModule } from './exists/exists.module';
import { MessageAttachmentsModule } from './message-attachments/message-attachments.module';

const envFilePath = '.env';
// if (process.env.ENVIRONMENT === 'PRODUCTION') envFilePath = '.env.production';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ envFilePath }),
    PassportModule.register({ session: true }),
    ConversationsModule,
    MessagesModule,
    GatewayModule,
    EventEmitterModule.forRoot(),
    GroupModule,
    FriendRequestsModule,
    FriendsModule,
    EventsModule,
    ExistsModule,
    ThrottlerModule.forRoot({
      ttl: 10,
      limit: 10,
    }),
    MessageAttachmentsModule,
  ],
  controllers: [],
  // TODO: CÒN MỞ LẠI ĐỂ GUARD, TẠM COMMENT ĐẾN KHI HOÀN THÀNH AUTH
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: ThrottlerBehindProxyGuard,
  //   },
  // ],
})
export class AppModule {}
