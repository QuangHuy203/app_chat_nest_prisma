import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Query,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Routes, Services } from '../../utils/constants';
import { UserAlreadyExists } from '../exceptions/UserAlreadyExists';
import { IUserService } from '../interfaces/user';

@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  @MessagePattern('search-user')
  searchUsers(query: any) {
    if (!query)
      throw new HttpException('Provide a valid query', HttpStatus.BAD_REQUEST);
    return this.userService.searchUsers(query);
  }

  @MessagePattern('check-user')
  async checkUsername({ username }) {
    if (!username)
      throw new HttpException('Invalid Query', HttpStatus.BAD_REQUEST);
    const user = await this.userService.findUser({ username });
    if (user.data) throw new UserAlreadyExists();
    return HttpStatus.OK;
  }
}
