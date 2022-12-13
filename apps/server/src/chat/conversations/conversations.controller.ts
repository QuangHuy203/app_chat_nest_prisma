import {
  Body,
  Controller,
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
import { SkipThrottle } from '@nestjs/throttler';

@SwaggerController('conversations')
@SkipThrottle()
@UseGuards(JwtGuard)
@Controller(Routes.CONVERSATIONS)
export class ConversationsController {
  logger = new Logger('Conversations');

  constructor(@Inject('CHAT_SERVICE') private client: ClientProxy) {}

  @Get()
  getConversations(
    @GetUser('id') userId: number,
    @Query() paginationQueryDto: any,
  ) {
    this.logger.log('Get all conversations by user');
    const pattern = { cmd: 'get_conversations' };
    paginationQueryDto['userId'] = userId;
    return this.client.send(pattern, paginationQueryDto);
  }

  @Get(':id')
  getConversationById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser('id') userId: number,
  ) {
    this.logger.log('Get a conversation item by id');
    return this.client.send('get_conversation_by_id', { id, userId });
  }

  @Get(':recipientId/exists')
  async checkConversationExists(
    // @AuthUser() user: User,
    @Param('recipientId', ParseIntPipe) recipientId: number,
  ) {
    return this.client.send('recipient_exist', { userId: 1, recipientId });
  }

  @Post()
  async addConversation(@GetUser('id') userId: number, @Body() dto: any) {
    this.logger.log('Add a conversation item');
    dto.createdBy = userId;
    dto['messages'] = [
      {
        createdBy: userId,
        authorId: userId,
        content: dto.messages,
      },
    ];
    delete dto.message;
    return this.client.send('add_conversation', dto);
  }
}
