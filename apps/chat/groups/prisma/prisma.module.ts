import { Global, Module } from '@nestjs/common';
import { PrismaServiceGroup } from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceGroup],
  exports: [PrismaServiceGroup],
})
export class PrismaModuleGroup {}
