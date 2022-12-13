import { Global, Module } from '@nestjs/common';
import { PrismaServiceFriends } from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceFriends],
  exports: [PrismaServiceFriends],
})
export class PrismaModuleFriends {}
