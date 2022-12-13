import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaServiceAuth } from '../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private prisma: PrismaServiceAuth) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow('JWT_SECRET'),
    });
  }

  // Hàm bắt buộc phải có để nhận giá trị jwt
  // Cần try catch trong trường hợp truncate database
  async validate(payload: { id: number; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.id,
      },
      select: {
        id: true,
      },
    });

    return user;
  }
}
