import { HTTP } from '@common/http';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IImageStorageService } from '../../image-storage/image-storage';
import { Services } from '../../utils/constants';
import { generateUUIDV4 } from '../../utils/helpers';
import { UpdateUserProfileParams } from '../../utils/types';
import { IUserProfile } from '../interfaces/user-profile';
import { PrismaServiceUserPresence } from '../prisma/prisma.service';

@Injectable()
export class UserProfileService implements IUserProfile {
  constructor(
    private prisma: PrismaServiceUserPresence,
    @Inject(Services.IMAGE_UPLOAD_SERVICE)
    private readonly imageStorageService: IImageStorageService,
    private http: HTTP,
  ) {}

  async createProfile() {
    return await this.prisma.userProfile.create({
      data: {},
    });
  }

  /**
   * create profile or update
   * @param userId
   * @param params
   * @returns
   */
  async createProfileOrUpdate(userId: number, params: UpdateUserProfileParams) {
    // check is exist
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'users.USER.NOT_FOUND',
      );
    }

    // create profile if empty
    if (!user.profileId) {
      user.profileId = (await this.createProfile()).id;
      return this.updateProfile(user, params);
    }

    return this.updateProfile(user, params);
  }

  /**
   * update profile
   * @param user
   * @param params
   * @returns
   */
  async updateProfile(user: any, params: UpdateUserProfileParams) {
    if (params.avatar) {
      user.profile.avatar = await this.updateAvatar(params.avatar);
    }
    if (params.banner) {
      user.profile.banner = await this.updateBanner(params.banner);
    }
    if (params.about) {
      user.profile.about = params.about;
    }
    const userId = user.id;
    delete user.id;

    return await this.prisma.user.update({
      data: {
        ...user,
      },
      where: { id: userId },
    });
  }

  /**
   * update banner
   * @param file 
   * @returns 
   */
  async updateBanner(file: Express.Multer.File) {
    console.log('Updating Banner');
    const key = generateUUIDV4();
    await this.imageStorageService.upload({ key, file });
    return key;
  }

  /**
   * update avatar
   * @param file 
   * @returns 
   */
  async updateAvatar(file: Express.Multer.File) {
    console.log('Updating Avatar');
    const key = generateUUIDV4();
    await this.imageStorageService.upload({ key, file });
    return key;
  }
}
