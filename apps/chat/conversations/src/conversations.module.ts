import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Services } from '../../utils/constants';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { PrismaModuleConversations } from './prisma/prisma.module';
import { PrismaQuery } from '@common/utils/dto/query.prisma';
import { HTTP } from '@common/http';
import { UsersModule } from '@apps/chat/users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    UsersModule,
    PrismaModuleConversations,
  ],
  controllers: [ConversationsController],
  providers: [
    PrismaQuery,
    HTTP,
    {
      provide: Services.CONVERSATIONS,
      useClass: ConversationsService,
    },
  ],
  exports: [
    {
      provide: Services.CONVERSATIONS,
      useClass: ConversationsService,
    },
  ],
})
export class ConversationsModule {}
