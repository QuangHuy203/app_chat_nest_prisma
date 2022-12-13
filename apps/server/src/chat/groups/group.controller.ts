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
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Routes } from '../../../../chat/utils/constants';

@Controller(Routes.GROUPS)
export class GroupController {
  logger = new Logger('Group');

  constructor(@Inject('CHAT_SERVICE') private client: ClientProxy) {}

  @Post()
  createGroup(@Body() body: any) {
    this.logger.log('Create group chat');
    return this.client.send('create_group_chat', body);
  }

  @Get()
  getGroups() {
    this.logger.log('Get user group chat');
    return this.client.send('get_groups_chat', { userId: 1 });
  }

  @Get(':id')
  getSingleGroup(@Param('id', ParseIntPipe) id: number) {
    return this.client.send('get_single_group', id);
  }

  @Patch(':id/owner')
  async updateGroupOwner(
    @Param('id', ParseIntPipe) groupId: number,
    @Body() { newOwnerId }: any,
  ) {
    this.logger.log('Update group owner');
    const params = { userId: 1, groupId, newOwnerId };
    return this.client.send('update_group_owner', params);
  }

  @Patch(':id/details')
  // @UseInterceptors(FileInterceptor('avatar'))
  async updateGroupDetails(
    @Body() { title }: any,
    @Param('id', ParseIntPipe) id: number,
    // @UploadedFile() avatar: Attachment
  ) {
    this.logger.log('Update group details');
    return this.client.send('update_group_details', {
      id: id,
      avatar: null,
      title,
    });
  }
}
