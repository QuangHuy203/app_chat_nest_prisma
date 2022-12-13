import { PrismaClient } from '@prisma/mysql';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MySQLClient extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.getOrThrow('MYSQL_DATABASE_URL'),
        },
      },
    });
  }

  cleanDatabase(callback: any) {
    return callback;
  }
}
