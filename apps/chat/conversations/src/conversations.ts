import { ConversationDto } from './dto';

export interface IConversationsService {
  addConversation(
    conversationParams: ConversationDto,
  ): Promise<any>;
  getConversations(query: any): Promise<any[]>;
  getConversationById(id: number): Promise<any>;
  findById(id: number): Promise<any | undefined>;
  hasAccess(params: any): Promise<boolean>;
  isCreated(
    userId: number,
    recipientId: number,
  ): Promise<any | undefined>;
  isFriends(
    creatorId: number,
    recipientId: number,
  ): Promise<any | undefined>;
}
