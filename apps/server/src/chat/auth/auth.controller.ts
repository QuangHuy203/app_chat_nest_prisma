import { CreateUserDto } from '@apps/chat/auth/dtos/CreateUser.dto';
import { Routes, Services } from '@apps/chat/utils/constants';
import { AuthenticatedRequest } from '@apps/chat/utils/types';
import { SwaggerController } from '@common/auth/decorator';
import { JwtGuard } from '@common/auth/guards';
import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from 'express';

@SwaggerController(Routes.AUTH)
@Controller(Routes.AUTH)
export class AuthController {
  logger = new Logger('Auth');

  constructor(@Inject(Services.AUTH) private client: ClientProxy) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const response = this.client.send('register', createUserDto);
    return response;
  }

  @Post('login')
  login(@Body() auth: any) {
    return this.client.send('login', auth);
  }

  @Get('status')
  @UseGuards(JwtGuard)
  async status(@Req() req: any) {
    const token = req.header('authorization').replace('Bearer ', '');
    return this.client.send('status', token);
  }

  @Post('logout')
  @UseGuards(JwtGuard)
  logout(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    return this.client.send('logout', { req, res });
  }
}
