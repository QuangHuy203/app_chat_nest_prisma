import { Global, Module } from '@nestjs/common';
import { PrismaServiceMessages } from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceMessages],
  exports: [PrismaServiceMessages],
})
export class PrismaModuleMessages {}
