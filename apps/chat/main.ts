import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RedisModule } from '@common/redis';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { AppModule } from '@apps/chat/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    RedisModule.getRedisOption({
      logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    }),
  );

  const config = app.get(ConfigService);
  await app.listen().then(() => {
    const logger = new Logger('Client service');
    logger.log(
      `API Gateway start at port: ${config.get(
        'PORT',
      )}\nMicroservice port:${config.get(
        'PORT_PUBLIC_REDIS',
      )}\nMYSQL: ${config.get('MYSQL_DATABASE_URL')}\nMONGODB: ${config.get(
        'MONGODB_DATABASE_URL',
      )}`,
    );
  });
}

bootstrap();
