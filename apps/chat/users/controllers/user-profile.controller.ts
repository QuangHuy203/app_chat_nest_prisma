import {
  Body,
  Controller,
  Inject,
  Patch,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Routes, Services, UserProfileFileFields } from '../../utils/constants';
import { AuthUser } from '../../utils/decorators';
import { User } from '../../utils/typeorm';
import { UpdateUserProfileParams, UserProfileFiles } from '../../utils/types';
import { UpdateUserProfileDto } from '../dtos/UpdateUserProfile.dto';
import { IUserProfile } from '../interfaces/user-profile';

@Controller(Routes.USERS_PROFILES)
export class UserProfilesController {
  constructor(
    @Inject(Services.USERS_PROFILES)
    private readonly userProfileService: IUserProfile,
  ) {}

  @MessagePattern('update-user-profile')
  async updateUserProfile(
    user: User,
    files: UserProfileFiles,
    updateUserProfileDto: UpdateUserProfileDto,
  ) {
    console.log('Inside Users/Profiles Controller');
    const params: UpdateUserProfileParams = {};
    updateUserProfileDto.about && (params.about = updateUserProfileDto.about);
    files.banner && (params.banner = files.banner[0]);
    files.avatar && (params.avatar = files.avatar[0]);
    return this.userProfileService.createProfileOrUpdate(user.id, params);
  }
}
