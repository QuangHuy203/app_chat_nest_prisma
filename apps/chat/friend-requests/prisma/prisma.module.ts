import { Global, Module } from '@nestjs/common';
import { PrismaServiceFriendReuests } from './prisma.service';

@Global()
@Module({
  providers: [PrismaServiceFriendReuests],
  exports: [PrismaServiceFriendReuests],
})
export class PrismaModuleFriendRequests {}
