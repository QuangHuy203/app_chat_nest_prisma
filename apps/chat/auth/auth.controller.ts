import { HTTP } from '@common/http';
import { Controller, HttpStatus, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MessagePattern } from '@nestjs/microservices';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { IUserService } from '../users/interfaces/user';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
    private jwtService: JwtService,
    private http: HTTP,
    private config: ConfigService,
  ) {}

  /**
   * register user
   * @param createUserDto
   * @returns
   */
  @MessagePattern('register')
  async registerUser(createUserDto: CreateUserDto) {
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'auth.REGISTER_SUCCESS',
      instanceToPlain((await this.userService.createUser(createUserDto)).data),
    );
  }

  /**
   * login
   * @param data
   * @returns
   */
  @MessagePattern('login')
  async login(data) {
    return this.authService.login(data);
  }

  /**
   * use status to get user
   * @param param0
   * @returns
   */
  @MessagePattern('status')
  async status(token) {
    const payload = this.jwtService.verify(token, {
      secret: this.config.getOrThrow('JWT_SECRET'),
    });
    const username = payload.username;
    const user = await this.userService.findUser(username);
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'auth.GET_STATUS_SUCCESS',
      user.data,
    );
  }

  /**
   * logout method
   * @param param0
   * @returns
   */
  @MessagePattern('logout')
  logout({ req, res }: { req: Request; res: Response }) {
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'auth.LOGOUT_SUCCESS',
      req.logout(err => {
        return err ? 400 : 200;
      }),
    );
  }
}
