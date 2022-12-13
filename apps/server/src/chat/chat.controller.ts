import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('chat')
export class ChatController {
  logger = new Logger('Areas');

  constructor(@Inject('CHAT_SERVICE') private client: ClientProxy) {}
}
