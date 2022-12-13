import { User } from '../utils/typeorm';
import { ValidateUserDetails } from '../utils/types';

export interface IAuthService {
  login(data: any);
}
