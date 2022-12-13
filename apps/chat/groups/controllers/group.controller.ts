import { Get, Inject, Param } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Services } from '../../utils/constants';
import { CreateGroupDto } from '../dtos/CreateGroup.dto';
import { IGroupService } from '../interfaces/group';

// @SkipThrottle()
// @Controller(Routes.GROUPS)
export class GroupController {
  constructor(
    @Inject(Services.GROUPS) private readonly groupService: IGroupService,
    private eventEmitter: EventEmitter2,
  ) {}

  @MessagePattern('create_group_chat')
  async createGroup(@Payload() payload: CreateGroupDto) {
    const group = await this.groupService.createGroup({
      ...payload,
      creator: '1',
    });
    // this.eventEmitter.emit('group.create', group);
    return group;
  }

  @MessagePattern('get_groups_chat')
  getGroups(@Payload() payload: { userId: number }) {
    return this.groupService.getGroups(payload);
  }

  @MessagePattern('get_single_group')
  getGroup(@Payload() id: number) {
    return this.groupService.findGroupById(id);
  }

  @MessagePattern('update_group_owner')
  async updateGroupOwner(
    @Payload() payload: { userId: number; groupId: number; newOwnerId: number },
  ) {
    const group = await this.groupService.transferGroupOwner(payload);
    this.eventEmitter.emit('group.owner.update', group);
    return group;
  }

  @MessagePattern('update_group_details')
  async updateGroupDetails(@Payload() payload: any) {
    return this.groupService.updateDetails(payload);
  }
}
