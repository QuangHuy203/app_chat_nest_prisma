import { Global, Module } from '@nestjs/common';
import { PrismaServiceMessageAttachments } from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceMessageAttachments],
  exports: [PrismaServiceMessageAttachments],
})
export class PrismaModuleMessageAttachments {}
