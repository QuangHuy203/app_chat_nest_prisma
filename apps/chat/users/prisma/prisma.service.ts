import { Injectable } from '@nestjs/common';
import { MySQLClient } from '@common/prisma/mysql_prisma_client';

@Injectable()
export class PrismaServiceUserPresence extends MySQLClient {
  cleanDatabase() {
    return this.$transaction([this.userPresence.deleteMany()]);
  }
}
