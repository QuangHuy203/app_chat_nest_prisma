import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagePattern } from '@nestjs/microservices';
import { SkipThrottle } from '@nestjs/throttler';
import { Routes, ServerEvents, Services } from '../utils/constants';
import { IFriendsService } from './friends';

@SkipThrottle()
@Controller(Routes.FRIENDS)
export class FriendsController {
  constructor(
    @Inject(Services.FRIENDS_SERVICE)
    private readonly friendsService: IFriendsService,
    private readonly event: EventEmitter2,
  ) {}

  @MessagePattern('get-friends')
  async getFriends(user: any) {
    console.log('Fetching Friends');
    return this.friendsService.getFriends(user.id);
  }


  @MessagePattern('delete-friend')
  async deleteFriend(dto: any) {
    console.log('Getting delete friend');
    const friend = await this.friendsService.deleteFriend(dto);
    this.event.emit(ServerEvents.FRIEND_REMOVED, { friend, userId: dto.userId });
    return friend;
  }

  // @Delete(':id/delete')
  // async deleteFriend(
  //   userId: number,
  //   id: number,
  // ) {
  //   const friend = await this.friendsService.deleteFriend({ id, userId });
  //   this.event.emit(ServerEvents.FRIEND_REMOVED, { friend, userId });
  //   return friend;
  // }
}
