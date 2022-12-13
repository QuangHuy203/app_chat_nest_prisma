import { User } from '../../utils/typeorm';
import { UpdateUserProfileParams } from '../../utils/types';

export interface IUserProfile {
  createProfile();
  updateProfile(userId: number, params: UpdateUserProfileParams);
  createProfileOrUpdate(userId: number, params: UpdateUserProfileParams);
}
