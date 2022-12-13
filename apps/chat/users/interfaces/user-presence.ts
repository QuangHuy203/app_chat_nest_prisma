import { User } from '@apps/chat/utils/typeorm';
import { UserPresenceDto } from '../dtos/user-presence.dto';

export interface IUserPresenceService {
  createPresence(dto: UserPresenceDto);
  updateStatus(params: { user: User; id: number; dto: UserPresenceDto });
}
