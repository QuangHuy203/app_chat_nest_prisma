import { MySQLClient } from '@common/prisma/mysql_prisma_client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaServiceAuth extends MySQLClient {
  cleanDatabase() {
    return this.$transaction([
      // this.bookmark.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
