import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IConversationsService } from '../conversations/src/conversations';
import { ConversationNotFoundException } from '../conversations/exceptions/ConversationNotFound';
import { IUserService } from '../users/interfaces/user';
import { Routes, Services } from '../utils/constants';
import { AuthUser } from '../utils/decorators';
import { User } from '../utils/typeorm';

@Controller(Routes.EXISTS)
export class ExistsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConversationsService,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
    private readonly events: EventEmitter2,
  ) {}

  @MessagePattern('recipient_exist')
  async checkConversationExists(
    @Payload() payload: { userId: number; recipientId: number },
  ) {
    const { userId, recipientId } = payload;
    const conversation = await this.conversationsService.isCreated(
      recipientId,
      userId,
    );
    if (conversation) return conversation;
    const recipient = await this.userService.findUser({ id: recipientId });
    if (!recipient)
      throw new HttpException('Recipient Not Found', HttpStatus.NOT_FOUND);
    const newConversation = await this.conversationsService.addConversation(
      // user,
      // {
      //   username: recipient.username,
      //   message: 'hello',
      // },
      {
        createdBy: userId,
        username: recipient.username,
        messages: [
          {
            createdBy: userId,
            authorId: userId,
            content: 'hello',
          },
        ],
      },
    );
    this.events.emit('conversation.create', newConversation);
    return newConversation;
  }
}
