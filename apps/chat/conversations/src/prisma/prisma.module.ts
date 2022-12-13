import { Global, Module } from '@nestjs/common';
import { PrismaServiceConversations } from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceConversations],
  exports: [PrismaServiceConversations],
})
export class PrismaModuleConversations {}
