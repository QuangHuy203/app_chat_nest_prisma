import {
  AcceptFriendRequestResponse,
  CancelFriendRequestParams,
  CreateFriendParams,
  FriendRequestParams,
} from '../utils/types';

export interface IFriendRequestService {
  accept(params: FriendRequestParams): Promise<any>;
  cancel(params: CancelFriendRequestParams): Promise<any>;
  create(params: CreateFriendParams): Promise<any>;
  reject(params: CancelFriendRequestParams): Promise<any>;
  getFriendRequests(userId: number): Promise<any>;
  isPending(userOneId: number, userTwoId: number);
  findById(id: number): Promise<any>;
}
