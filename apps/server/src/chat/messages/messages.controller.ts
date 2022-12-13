import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtGuard } from '@common/auth/guards';
import { GetUser, SwaggerController } from '@common/auth/decorator';
import { Routes } from '@apps/chat/utils/constants';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

@SwaggerController('messages')
@UseGuards(JwtGuard)
@Controller(Routes.MESSAGES)
export class MessagesController {
  logger = new Logger('Messages');

  constructor(@Inject('CHAT_SERVICE') private client: ClientProxy) { }

  @Get()
  @SkipThrottle()
  getMessagesFromConversation(
    @Param('id', ParseIntPipe) id: number,
    @Query() paginationQueryDto: any
    ) {
    this.logger.log('Get the messages from conversation');
    const pattern = { cmd: 'get_messages_from_conversation' };
    paginationQueryDto.conversationId = id;
    return this.client.send(pattern, paginationQueryDto);
  }

  @Post()
  @Throttle(5, 10)
  async addMessage(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto
    ) {
    this.logger.log('Add a message item');
    dto.createdBy = userId;
    dto.authorId = userId;
    dto.conversationId = id;
    return this.client.send('add_message', dto);
  }

  @Patch(':messageId')
  editeMessage(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) conversationId: number,
    @Param('messageId', ParseIntPipe) messageId: number,
    @Body() dto,
  ) {
    this.logger.log('Edit a message item');
    dto['updatedBy'] = userId;
    dto['authorId'] = userId;
    dto['id'] = messageId;
    dto['conversationId'] = conversationId
    return this.client.send('edit_message', dto);
  }

  @Delete(':messageId')
  deleteMessage(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) conversationId: number,
    @Param('messageId', ParseIntPipe) messageId: number,
    @Body() dto,
  ) {
    this.logger.log('Delete a message item');
    dto['updatedBy'] = userId;
    dto['id'] = messageId;
    dto['conversationId'] = conversationId
    dto['authorId'] = userId;
    return this.client.send('delete_message', dto);
  }
}

