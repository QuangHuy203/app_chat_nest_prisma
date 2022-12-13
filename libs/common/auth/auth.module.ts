import { JwtStrategy, GoogleStrategy } from '@common/auth/strategies';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import { PrismaModuleAuth } from './prisma/prisma.module';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env',
    }),
    AuthModuleCommon,
    PrismaModuleAuth,
  ],
  providers: [JwtStrategy, GoogleStrategy, JwtRefreshStrategy],
})
export class AuthModuleCommon implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
