import { Inject } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Services } from '../../utils/constants';
import { CreateGroupMessageParams } from '../../utils/types';
import { IGroupMessageService } from '../interfaces/group-messages';

export class GroupMessageController {
  constructor(
    @Inject(Services.GROUP_MESSAGES)
    private readonly groupMessageService: IGroupMessageService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  // @Throttle(5, 10)
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     {
  //       name: 'attachments',
  //       maxCount: 5,
  //     },
  //   ])
  // )
  @MessagePattern('create_group_message')
  async createGroupMessage(@Payload() payload: CreateGroupMessageParams) {
    const response = await this.groupMessageService.createGroupMessage(payload);
    this.eventEmitter.emit('group.message.create', response);
    return response;
  }

  @MessagePattern('get_group_messages')
  async getGroupMessages(@Payload() groupId: number) {
    console.log(`Fetching GroupMessages for Group Id: `);
    const messages = await this.groupMessageService.getGroupMessages(groupId);
    return messages;
  }

  @MessagePattern('delete_group_message')
  async deleteGroupMessage(
    @Payload() payload: { userId: number; groupId: number; messageId: number },
  ) {
    await this.groupMessageService.deleteGroupMessage(payload);
    this.eventEmitter.emit('group.message.delete', payload);
    return { groupId: payload.groupId, messageId: payload.messageId };
  }

  @MessagePattern('edit_group_message')
  async editGroupMessage(
    @Payload()
    payload: {
      userId: number;
      groupId: number;
      messageId: number;
      content: string;
    },
  ) {
    const message = await this.groupMessageService.editGroupMessage(payload);
    this.eventEmitter.emit('group.message.update', message);
    return message;
  }
}
