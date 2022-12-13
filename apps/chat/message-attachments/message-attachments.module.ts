import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImageStorageModule } from '../image-storage/image-storage.module';
import { Services } from '../utils/constants';
import { MessageAttachmentsService } from './message-attachments.service';
import { PrismaModuleMessageAttachments } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    ImageStorageModule,
  ],
  providers: [
    PrismaModuleMessageAttachments,
    {
      provide: Services.MESSAGE_ATTACHMENTS,
      useClass: MessageAttachmentsService,
    },
  ],
  exports: [
    {
      provide: Services.MESSAGE_ATTACHMENTS,
      useClass: MessageAttachmentsService,
    },
  ],
})
export class MessageAttachmentsModule {}
