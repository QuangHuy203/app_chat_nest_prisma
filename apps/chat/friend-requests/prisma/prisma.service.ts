import { MySQLClient } from '@common/prisma/mysql_prisma_client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaServiceFriendReuests extends MySQLClient {
  cleanDatabase() {
    return this.$transaction([]);
  }
}
