import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessagesController } from './messages.controller';
import { ConversationsModule } from '../../conversations/src/conversations.module';
import { MessagesService } from './messages.service';
import { PrismaModuleMessages } from './prisma/prisma.module';
import { PrismaQuery } from '@common/utils/dto/query.prisma';
import { HTTP } from '@common/http';
import { Services } from '@apps/chat/utils/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    PrismaModuleMessages,
    ConversationsModule,
  ],
  controllers: [MessagesController],
  providers: [
    PrismaQuery,
    HTTP,
    {
      provide: Services.MESSAGES,
      useClass: MessagesService,
    },
  ],
  exports: [
    {
      provide: Services.MESSAGES,
      useClass: MessagesService,
    },
  ],
})
export class MessagesModule {}
