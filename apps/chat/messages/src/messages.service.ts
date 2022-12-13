import { CustomResponse, HTTP } from '@common/http';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaServiceMessages } from './prisma/prisma.service';
import { RESTfulParams, RESTfulService } from '@common/utils/requets.util';
import { DeleteMessageDto, EditMessageDto, MessageDto } from './dto';
import { PrismaQuery } from '@common/utils';
import { IConversationsService } from '@apps/chat/conversations/src/conversations';
import { Services } from '@apps/chat/utils/constants';
import { cloneDeep } from 'lodash';

@Injectable()
export class MessagesService extends RESTfulService {
  constructor(
    private prisma: PrismaServiceMessages,
    private readonly prismaquery: PrismaQuery,
    private http: HTTP,
    @Inject(Services.CONVERSATIONS)
    private readonly conversationService: IConversationsService
  ) {
    super();
  }
  protected getDb(): PrismaQuery {
    const query = this.prismaquery.where({ deletedDate: null });
    return query;
  }

  protected params: RESTfulParams = {
    list: {
      filterFields: [],
      searchFields: [],
      orderFields: [],
    },
  };

  async getMessages(query: any): Promise<CustomResponse> {
    const pagination = await this.getLists(query);

    const messages = await this.prisma.message.findMany({
      take: pagination.take,
      skip: pagination.skip,
      where: {
        conversationId: Number(query.conversationId)
      },
      orderBy: { createdDate: 'desc' }
    });

    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Get messages successfully',
      messages,
    );
  }

  async addMessage(dto: MessageDto): Promise<CustomResponse> {
    try {
      const { createdBy, authorId, content, conversationId } = dto;
      const conversation = await this.prisma.conversation.findUnique(
        {
          where: { id: conversationId }
        }
      );
      if (!conversation) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The conversation does not existed',
          null,
        );
      } else if (conversation.deletedDate) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The conversation has been deleted',
        );
      }
      const { creator, recipient } = conversation;
      if (!await this.conversationService.isFriends(creator, recipient)){
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'Friend not found',
          null,
        );
      }

      const addedData = await this.prisma.message.create({ data: dto });
      await Promise.all([
        this.prisma.conversation.update({
          where: {
            id: conversationId
          },
          data: {
            lastMessageSentAt: new Date()
          }
        }),
        this.prisma.conversation_Message.create({
          data: {
            conversationId: conversationId,
            messageId: addedData.id
          }
        })
      ]);

      // return data
      const data = await this.prisma.conversation_Message.findMany({
        where: {
          conversationId,
          messageId: addedData.id
        },
        include: {
          conversation: {
            include: {userCreator: true, userRecipient: true, lastMessageSent: true}
          },
          message: {
            include: {user: {
              include: {
                Peer: true,
                presence: true,
                UserProfile: true
              }
            }}
          }
        }
      })
      const lastMessageSent = data[0].conversation.lastMessageSent.find(msg => msg.messageId === data[0].messageId);
      const conversationObj = {
        createdAt: data[0].conversation.createdDate,
        id: data[0].conversation.id,
        lastMessageSentAt: lastMessageSent.createdDate,
        lastMessageSent,
        creator: this.reduceProps(data[0].conversation.userCreator),
          recipient: this.reduceProps(data[0].conversation.userRecipient),
        }
      const messageObj = {
        id: data[0].messageId,
        attachments: [],
        content: data[0].message.content,
        createdAt: data[0].message.createdDate,
        author: this.reduceProps(data[0].message.user),
        conversation: conversationObj
      }

      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Create the message successfully',
        { message: messageObj, conversation: conversationObj }
      );
    } catch (error: any) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'Create the message unsuccessfully',
        error,
      );
    }
  }

  async deleteMessage(dto: DeleteMessageDto): Promise<CustomResponse> {
    try {
      const message = await this.prisma.message.findUnique({
        where: {
          id: dto.id
        }
      });
      if (!message) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The message does not existed',
          null,
        );
      } else if (message.deletedDate) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The message has been deleted',
        );
      }
      if (message.authorId !== dto.authorId || message.conversationId !== dto.conversationId) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'Cannot delete this message',
          null,
        );
      }
      await this.prisma.message.delete({
        where: {
          id: dto.id
        },
      });
      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Delete the message item successfully',
        { conversationId: dto.conversationId, messageId: dto.id }
      );
    } catch (error) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'Delete the message item unsuccessfully',
        error,
      );
    }
  }

  async editMessage(dto: EditMessageDto): Promise<CustomResponse> {
    try {
      const message = await this.prisma.message.findUnique({
        where: {
          id: dto.id
        }
      });
      if (!message) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The message does not existed',
          null,
        );
      } else if (message.deletedDate) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The message has been deleted',
        );
      }
      if (message.authorId !== dto.authorId || message.conversationId !== dto.conversationId) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'Cannot edit this message',
          null,
        );
      }
      const data = await this.prisma.message.update({
        where: {
          id: dto.id
        },
        data: {
          updatedBy: dto.updatedBy,
          updatedDate: new Date(),
          content: dto.content
        },
        select: {
          id: true, content: true, createdDate: true, user: true, conversation: {
          include: { userCreator: true, userRecipient: true }
        }}
      });
      //return data
      const messageObj = {
        id: data.id,
        content: data.content,
        createdAt: data.createdDate,
        author: this.reduceProps(data.user),
        conversation: {
          creator: this.reduceProps(data.conversation.userCreator),
          recipient: this.reduceProps(data.conversation.userRecipient)
        }
      }

      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Edit the message item successfully',
        { message: messageObj }
      );
    } catch (error) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'Edit the message item unsuccessfully',
        error,
      );
    }
  }

  reduceProps(obj) {
    return {
      id: obj.id,
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      username: obj.username,
      peer: obj?.Peer,
      profile: obj?.UserProfile,
      presence: obj?.presence,
    }
  }
}