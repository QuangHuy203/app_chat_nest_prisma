import {
  Body,
  Controller,
  Inject,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagePattern } from '@nestjs/microservices';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { Routes, ServerEvents, Services } from '../utils/constants';
import { User } from '../utils/typeorm';
import { CreateFriendDto } from './dtos/CreateFriend.dto';
import { IFriendRequestService } from './friend-requests';

@Controller(Routes.FRIEND_REQUESTS)
export class FriendRequestController {
  constructor(
    @Inject(Services.FRIENDS_REQUESTS_SERVICE)
    private readonly friendRequestService: IFriendRequestService,
    private event: EventEmitter2,
  ) {}

  @MessagePattern('get_friend_requests')
  async createGroupMessage(user: User) {
    return this.friendRequestService.getFriendRequests(user.id);
  }

  @MessagePattern('create_friend_request')
  async createFriendRequest(
    @Body('user') user: User,
    @Body('dto') { username }: CreateFriendDto,
  ) {
    const params = { user, username };
    const friendRequest = await this.friendRequestService.create(params);
    this.event.emit(ServerEvents.FRIEND_REQUEST_CREATED, friendRequest);
    return friendRequest;
  }

  @MessagePattern('accept_friend_request')
  async acceptFriendRequest(dto: any) {
    const response = await this.friendRequestService.accept(dto);
    this.event.emit(ServerEvents.FRIEND_REQUEST_ACCEPTED, response);
    return response;
  }

  @MessagePattern('cancel_friend_request')
  async cancelFriendRequest(dto: any) {
    const response = await this.friendRequestService.cancel(dto);
    this.event.emit(ServerEvents.FRIEND_REQUEST_CANCELLED, response);
    return response;
  }

  @MessagePattern('reject_friend_request')
  async rejectFriendRequest(dto: any) {
    const response = await this.friendRequestService.reject(dto);
    this.event.emit(ServerEvents.FRIEND_REQUEST_REJECTED, response);
    return response;
  }
}
