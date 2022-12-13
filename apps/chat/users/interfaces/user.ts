import { CreateUserDetails } from '../../utils/types';

export interface IUserService {
  createUser(userDetails: CreateUserDetails);
  findUser({ username, id }: { username?: string; id?: number });
  searchUsers(query: string);
}
