import { PrismaClient } from '@prisma/mongodb';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoDBClient extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.getOrThrow('MONGODB_DATABASE_URL'),
        },
      },
    });
  }

  cleanDatabase(callback: any) {
    return callback;
  }
}
