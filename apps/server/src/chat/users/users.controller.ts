import { Routes, Services } from '@apps/chat/utils/constants';
import { SwaggerController } from '@common/auth/decorator';
import { Controller, Get, Inject, Logger, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@SwaggerController(Routes.USERS)
@Controller(Routes.USERS)
export class UserController {
  logger = new Logger('User presence');

  constructor(@Inject(Services.USERS) private client: ClientProxy) {}

  @Get('search')
  searchUsers(@Query() query: any) {
    return this.client.send('search-user', query);
  }

  @Get('check')
  async checkUsername(@Query('username') username: string) {
    return this.client.send('check-user', { username });
  }
}
