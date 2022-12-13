import { Injectable } from '@nestjs/common';
import { MySQLClient } from '@common/prisma/mysql_prisma_client';

@Injectable()
export class PrismaServiceMessageAttachments extends MySQLClient {
  cleanDatabase() {
    return this.$transaction([]);
  }
}
