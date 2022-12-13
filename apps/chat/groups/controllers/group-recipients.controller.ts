import { Controller, Inject } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SkipThrottle } from '@nestjs/throttler';
import { Routes, Services } from '../../utils/constants';
import { AddGroupRecipientParams } from '../../utils/types';
import { IGroupRecipientService } from '../interfaces/group-recipient';

// @SkipThrottle()
// @Controller(Routes.GROUP_RECIPIENTS)
export class GroupRecipientsController {
  constructor(
    @Inject(Services.GROUP_RECIPIENTS)
    private readonly groupRecipientService: IGroupRecipientService,
    private eventEmitter: EventEmitter2,
  ) {}

  @MessagePattern('add_group_recipient')
  async addGroupRecipient(@Payload() payload: AddGroupRecipientParams) {
    const response = await this.groupRecipientService.addGroupRecipient(
      payload,
    );
    this.eventEmitter.emit('group.user.add', response);
    return response;
  }

  /**
   * Leaves a Group
   * @param user the authenticated User
   * @param groupId the id of the group
   * @returns the updated Group that the user had left
   */
  @MessagePattern('recipient_leave')
  async leaveGroup(@Payload() payload: { id: number; userId: number }) {
    const group = await this.groupRecipientService.leaveGroup(payload);
    this.eventEmitter.emit('group.user.leave', {
      group,
      userId: payload.userId,
    });
    return group;
  }

  @MessagePattern('remove_group_recipient')
  async removeGroupRecipient(
    @Payload() payload: { issuerId: number; id: number; removeUserId: number },
  ) {
    const response = await this.groupRecipientService.removeGroupRecipient(
      payload,
    );
    this.eventEmitter.emit('group.user.remove', response);
    return response.group;
  }
}
