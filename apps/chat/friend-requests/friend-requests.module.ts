import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FriendsModule } from '../friends/friends.module';
import { UsersModule } from '../users/users.module';
import { Services } from '../utils/constants';
import { FriendRequestController } from './friend-requests.controller';
import { FriendRequestService } from './friend-requests.service';
import { PrismaModuleFriendRequests } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    UsersModule,
    FriendsModule,
    PrismaModuleFriendRequests,
  ],
  controllers: [FriendRequestController],
  providers: [
    {
      provide: Services.FRIENDS_REQUESTS_SERVICE,
      useClass: FriendRequestService,
    },
  ],
})
export class FriendRequestsModule {}
