import {
  Controller,
  Inject,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IMessagesService } from './messages';
import { MessageDto, DeleteMessageDto, EditMessageDto } from './dto';
import { RpcValidationFilter } from '@common/http';
import { Services } from '@apps/chat/utils/constants';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('messages')
export class MessagesController {
  constructor(
    @Inject(Services.MESSAGES)
    private readonly messagesService: IMessagesService,
    private readonly eventEmitter: EventEmitter2,
  ) { }

  @MessagePattern({ cmd: 'get_messages_from_conversation' })
  async getMessagesFromConversation(query: any) {
    return await this.messagesService.getMessages(query);
  }

  @MessagePattern('add_message')
  @UseFilters(new RpcValidationFilter())
  async addMessage(@Payload(new ValidationPipe({ whitelist: true })) dto: MessageDto) {
    const message = await this.messagesService.addMessage(dto);
    message.code === 200 && this.eventEmitter.emit('message.create', message.data);
    return message;
  }

  @MessagePattern('edit_message')
  @UseFilters(new RpcValidationFilter())
  async editeMessage(@Payload(new ValidationPipe({ whitelist: true })) dto: EditMessageDto) {
    const response = await this.messagesService.editMessage(dto);
    response.code === 200 && this.eventEmitter.emit('message.update', response.data.message);
    return response;
  }

  @MessagePattern('delete_message')
  @UseFilters(new RpcValidationFilter())
  async deleteMessage(@Payload(new ValidationPipe({ whitelist: true })) dto: DeleteMessageDto) {
    const params = { userId: dto.createdBy, conversationId: dto.conversationId, messageId: dto.id };
    const message = await this.messagesService.deleteMessage(dto);
    message.code === 200 && this.eventEmitter.emit('message.delete', params);
    return message;
  }
}
