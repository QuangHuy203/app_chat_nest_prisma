import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaServiceAuth } from '../prisma/prisma.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(config: ConfigService, private prisma: PrismaServiceAuth) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.getOrThrow('JWT_REFRESH_TOKEN_SECRET'),
      passReqToCallback: true,
    });
  }
  async validate(req: Request, payload: { id: number; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.id,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (!user) return user;

    const refreshToken = req.get('authorization').replace('Bearer', '').trim();
    console.log(refreshToken);
    return { ...user, refreshToken };
  }
}
