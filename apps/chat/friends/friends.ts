import { Friend } from '../utils/typeorm';
import { DeleteFriendRequestParams } from '../utils/types';

export interface IFriendsService {
  getFriends(id: number): Promise<any>;
  findFriendById(id: number): Promise<any>;
  deleteFriend(params: DeleteFriendRequestParams);
  isFriends(userOneId: number, userTwoId: number): Promise<any | undefined>;
}
