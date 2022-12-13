import { PrismaClient } from '@prisma/mysql';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaServiceConversations extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.getOrThrow('MYSQL_DATABASE_URL'),
        },
      },
    });
  }

  cleanDatabase() {
    return this.$transaction([this.conversation.deleteMany()]);
  }
}
