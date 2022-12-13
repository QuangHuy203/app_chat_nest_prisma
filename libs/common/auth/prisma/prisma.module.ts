import { Module } from '@nestjs/common';
import { PrismaServiceAuth } from './prisma.service';

@Module({
  providers: [PrismaServiceAuth],
  exports: [PrismaServiceAuth],
})
export class PrismaModuleAuth {}
