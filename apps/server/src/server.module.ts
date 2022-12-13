import { ResponseInterceptor } from '@common/interceptors';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APIController } from './server.controller';
import { APIService } from './server.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
} from 'nestjs-i18n';
import path from 'path';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    ChatModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [new HeaderResolver(['lang']), AcceptLanguageResolver],
    }),
  ],
  controllers: [APIController],
  providers: [
    APIService,
    {
      provide: 'DATE_KEYS',
      useValue: {},
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class APIModule {}
