import { SentryInterceptor } from '@common/interceptors';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as Sentry from '@sentry/node';
import 'reflect-metadata';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../../../package.json';
import { APIModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(APIModule, {});
  const config = app.get(ConfigService);
  app.setGlobalPrefix('api');

  // Error log to Sentry
  Sentry.init({
    dsn: config.get('SENTRY_DSN'),
  });
  app.useGlobalInterceptors(new SentryInterceptor());

  // Swagger API documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Power hub')
    .setDescription('Document API for Power hub project')
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  await app.listen(config.get('PORT'), () => {
    const logger = new Logger('API Gateway');
    logger.log(
      `API Gateway start at port: ${config.get(
        'PORT'
      )}\nMicroservice port:${config.get(
        'PORT_PUBLIC_REDIS'
      )}\nMYSQL: ${config.get('MYSQL_DATABASE_URL')}\nMONGODB: ${config.get(
        'MONGODB_DATABASE_URL'
      )}`
    );
  });
}
bootstrap();
