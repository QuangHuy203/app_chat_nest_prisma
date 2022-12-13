import { JwtService } from '@nestjs/jwt';
import { HTTP } from '@common/http';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Services } from '../utils/constants';
import { IUserService } from '../users/interfaces/user';
import crypto from 'crypto';
import { PrismaServiceAuth } from '@common/auth/prisma';

@Injectable()
export class AuthService extends HTTP {
  constructor(
    @Inject(Services.USERS) private userService: IUserService,
    private jwt: JwtService,
    private config: ConfigService,
    private http: HTTP,
    private prisma: PrismaServiceAuth,
  ) {
    super();
  }

  async login(data) {
    // find user by username
    const user = (await this.userService.findUser({ username: data.username }))
      .data;

    if (!user) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'common.INCORRECT_CREDENTIALS',
      );
    } else if (user.deletedDate) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'systems.USER.NOT_EXISTED',
      );
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.signToken(user.id, user.username),
      this.signRefreshToken(user.id, user.username),
    ]);

    return this.http.setHttpRequest(HttpStatus.OK, 'auth.LOGIN_SUCCESS', {
      ...user,
      accessToken,
      refreshToken,
    });
  }

  private async signToken(userId: number, username: string): Promise<string> {
    const payload = { id: userId, username };
    const secret = this.config.getOrThrow('JWT_SECRET');

    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn: this.config.getOrThrow('JWT_ACCESS_TOKEN_EXPIRE'),
      secret: secret,
    });

    return accessToken;
  }

  private async signRefreshToken(userId: number, username: string) {
    const payload = { id: userId, username };
    const secret = this.config.getOrThrow('JWT_REFRESH_TOKEN_SECRET');

    const refreshToken = await this.jwt.signAsync(payload, {
      expiresIn: this.config.getOrThrow('JWT_REFRESH_TOKEN_EXPIRE'),
      secret: secret,
    });

    const refreshTokenSha1 = crypto
      .createHash('sha1')
      .update(refreshToken)
      .digest('hex');

    await this.createToken(userId, refreshTokenSha1);
    return refreshToken;
  }

  private async createToken(userId: number, hashedToken: string) {
    const token = await this.prisma.tokens.findFirst({
      where: {
        userId,
      },
    });

    if (!token) {
      return this.prisma.tokens.create({
        data: {
          userId,
          refreshTokenSha1: hashedToken,
        },
      });
    }

    return await this.prisma.tokens.update({
      where: {
        userId,
      },
      data: {
        userId,
        refreshTokenSha1: hashedToken,
      },
    });
  }
}
