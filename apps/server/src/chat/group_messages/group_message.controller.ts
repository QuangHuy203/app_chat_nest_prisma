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
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Routes } from '../../../../chat/utils/constants';

@Controller(Routes.GROUP_MESSAGES)
export class GroupMessageController {
  logger = new Logger('Group messages');

  constructor(@Inject('CHAT_SERVICE') private client: ClientProxy) {}

  @Post()
  async createGroupMessage(
    // @AuthUser() user: User,
    // @UploadedFiles() { attachments }: { attachments: Attachment[] },
    @Param('id', ParseIntPipe) groupId: number,
    @Body() { content }: any,
  ) {
    // if (!attachments && !content) throw new EmptyMessageException();
    this.logger.log('Create group message');
    const params = { groupId, authorId: 1, content };
    return this.client.send('create_group_message', params);
  }

  @Get()
  async getGroupMessages(@Param('id', ParseIntPipe) groupId: number) {
    this.logger.log('Get group message');
    return this.client.send('get_group_messages', groupId);
  }

  @Patch(':messageId')
  //   @SkipThrottle()
  async editGroupMessage(
    // @AuthUser() { id: userId }: User,
    @Param('id', ParseIntPipe) groupId: number,
    @Param('messageId', ParseIntPipe) messageId: number,
    @Body() { content }: any,
  ) {
    this.logger.log('Edit group message');
    const params = { userId: 1, content, groupId, messageId };
    return this.client.send('edit_group_message', params);
  }

  @Delete(':messageId')
  //   @SkipThrottle()
  async deleteGroupMessage(
    // @AuthUser() user: User,
    @Param('id', ParseIntPipe) groupId: number,
    @Param('messageId', ParseIntPipe) messageId: number,
  ) {
    this.logger.log('Delete group message');
    return this.client.send('delete_group_message', {
      userId: 1,
      groupId,
      messageId,
    });
  }
}
