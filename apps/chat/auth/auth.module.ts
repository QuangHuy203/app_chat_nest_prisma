import { HTTP } from '@common/http';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { Services } from '../utils/constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaServiceAuth } from '@common/auth/prisma';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    JwtService,
    ConfigService,
    PrismaServiceAuth,
    HTTP,
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
