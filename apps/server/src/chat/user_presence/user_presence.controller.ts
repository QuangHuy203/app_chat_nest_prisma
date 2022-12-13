import { Routes, Services } from '@apps/chat/utils/constants';
import { GetUser, SwaggerController } from '@common/auth/decorator';
import { Body, Controller, Inject, Logger, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '@sentry/node';

@SwaggerController(Routes.USER_PRESENCE)
@Controller(Routes.USER_PRESENCE)
export class UserPresenceController {
  logger = new Logger('User presence');

  constructor(@Inject(Services.USER_PRESENCE) private client: ClientProxy) {}

  @Post()
  createPresence(@Body() dto: any) {
    return this.client.send('create-presence', dto);
  }

  @Patch('/:id')
  updateStatus(@GetUser() user: User, id: number, @Body() body: any) {
    return this.client.send('update-status', { user, id, body });
  }
}
