import { MessageDto, EditMessageDto, DeleteMessageDto } from './dto';

export interface IMessagesService {
  addMessage(
    params: MessageDto,
  ): Promise<any>;
  getMessages(query: any): Promise<any[]>;
  editMessage(params: EditMessageDto): Promise<any>;
  deleteMessage(params: DeleteMessageDto): Promise<any>;
}
