import {
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IConversationsService } from './conversations';
import { ConversationDto } from './dto';
import { RpcValidationFilter } from '@common/http';
import { Services } from '@apps/chat/utils/constants';
import { IUserService } from '../../users/interfaces/user';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('conversations')
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConversationsService,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @MessagePattern({ cmd: 'get_conversations' })
  async getCustomers(query: any) {
    return await this.conversationsService.getConversations(query);
  }

  @MessagePattern('get_conversation_by_id')
  async getConversationById(query: any) {
    return await this.conversationsService.getConversationById(query);
  }

  @MessagePattern('add_conversation')
  @UseFilters(new RpcValidationFilter())
  async addConversation(
    @Payload(new ValidationPipe({ whitelist: true })) dto: ConversationDto,
  ) {
    const conversation = await this.conversationsService.addConversation(dto);
    conversation.code === 200 && this.eventEmitter.emit('conversation.create', conversation.data);
    return conversation;
  }

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
    this.eventEmitter.emit('conversation.create', newConversation);
    return newConversation;
  }
}
