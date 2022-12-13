import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Services } from '../utils/constants';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { PrismaModuleFriends } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    PrismaModuleFriends
  ],
  providers: [
    {
      provide: Services.FRIENDS_SERVICE,
      useClass: FriendsService,
    },
  ],
  controllers: [FriendsController],
  exports: [
    {
      provide: Services.FRIENDS_SERVICE,
      useClass: FriendsService,
    },
  ],
})
export class FriendsModule {}
