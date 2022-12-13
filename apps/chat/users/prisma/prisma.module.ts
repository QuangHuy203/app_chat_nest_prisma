import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaServiceUserPresence } from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceUserPresence, ConfigService],
  exports: [PrismaServiceUserPresence],
})
export class PrismaModuleUserPresence {}
