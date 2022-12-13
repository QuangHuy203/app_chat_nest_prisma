import { UpdateUserProfileDto } from '@apps/chat/users/dtos/UpdateUserProfile.dto';
import {
  Routes,
  Services,
  UserProfileFileFields,
} from '@apps/chat/utils/constants';
import { AuthUser } from '@apps/chat/utils/decorators';
import { UserProfileFiles } from '@apps/chat/utils/types';
import { SwaggerController } from '@common/auth/decorator';
import {
  Body,
  Controller,
  Inject,
  Logger,
  Patch,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { User } from '@sentry/node';

@SwaggerController(Routes.USERS_PROFILES)
@Controller(Routes.USERS_PROFILES)
export class UserProfileController {
  logger = new Logger('User profile');

  constructor(@Inject(Services.USERS_PROFILES) private client: ClientProxy) {}

  @Patch()
  @UseInterceptors(FileFieldsInterceptor(UserProfileFileFields))
  async updateUserProfile(
    @AuthUser() user: User,
    @UploadedFiles()
    files: UserProfileFiles,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.client.send('update-user-profile', {
      user,
      files,
      updateUserProfileDto,
    });
  }
}
