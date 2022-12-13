import { Injectable } from '@nestjs/common';
import { MySQLClient } from '@common/prisma/mysql_prisma_client';

@Injectable()
export class PrismaServiceFriends extends MySQLClient {
  cleanDatabase() {
    return this.$transaction([]);
  }
}
