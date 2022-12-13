import { CustomResponse, HTTP } from '@common/http';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaServiceConversations } from './prisma/prisma.service';
import { RESTfulParams, RESTfulService } from '@common/utils/requets.util';
import { ConversationDto } from './dto';
import { PrismaQuery } from '@common/utils';
import { cloneDeep } from 'lodash';

@Injectable()
export class ConversationsService extends RESTfulService {
  constructor(
    private prisma: PrismaServiceConversations,
    private readonly prismaquery: PrismaQuery,
    private http: HTTP
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

  async getConversations(query: any): Promise<CustomResponse> {
    const pagination = await this.getLists(query);
    const where = {
      OR: [
        { creator: Number(query.userId) },
        { recipient: Number(query.userId) }
      ]
    }
    const [total, results] = await Promise.all([
      this.prisma.conversation.count({
        where
      }),
      this.prisma.conversation.findMany({
        take: pagination.take,
        skip: pagination.skip,
        // cursor: pagination.cursor,
        where,
        orderBy: { lastMessageSentAt: 'desc' },
        include: {
          lastMessageSent: true,
          userCreator: true,
          userRecipient: true,
          messages: {
            select: { content: true, authorId: true, conversationId: true, attachments: true }
          }
        },
      }),
    ]);
    const conversations = this.compactConversationList(cloneDeep(results));

    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Get conversations successfully',
      conversations,
      total,
    );
  }

  async getConversationById(query: any): Promise<CustomResponse> {
    try {
      const { id, userId } = query;
      const isReadable = await this.hasAccess({ id: Number(id), userId: userId });
      if (!isReadable) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'You cannot view this conversation',
        );
      }
      const data = await this.findById(id);

      const conversation = this.compactConversationList(cloneDeep([data]))[0];
      if (!conversation) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The conversation does not existed',
        );
      } else if (conversation.deletedDate) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The conversation has been deleted',
        );
      }
      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Get the conversation item successfully',
        conversation,
      );
    } catch (error: any) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'Get the conversation item unsuccessfully',
        error,
      );
    }
  }

  async findById(id: number): Promise<any> {
    return await this.prisma.conversation.findUnique({
      where: {
        id,
      },
      include: {
        lastMessageSent: true,
        userCreator: true,
        userRecipient: true,
        messages: {
          select: { content: true, authorId: true, conversationId: true, attachments: true }
        }
      },
    });
  }

  async addConversation(dto: ConversationDto): Promise<CustomResponse> {
    try {
      const recipient = await this.prisma.user.findFirst({
        where: {
          email: dto.username,
        },
      });
      if (!recipient) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The recipient does not existed',
          null,
        );
      } else if (recipient.deletedDate) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'The recipient has been deleted',
        );
      }
      if (dto.createdBy === recipient.id) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'Cannot create conversation with yourself',
          null,
        );
      }
      const isFriends = await this.isFriends(dto.createdBy, recipient.id);
      if (!isFriends) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'Friend Not Found',
          null,
        );
      }
      const isExist = await this.isCreated(dto.createdBy, recipient.id);
      if (isExist) {
        return this.http.setHttpRequest(
          HttpStatus.BAD_REQUEST,
          'Conversation already exists',
          null,
        );
      } 

      const conversationData = {
        createdBy: dto.createdBy,
        creator: dto.createdBy,
        recipient: recipient.id,
        lastMessageSentAt: new Date(),
        messages: {
          create: dto.messages,
        }
      }
      let result = await this.prisma.conversation.create({
        data: conversationData,
        include: {messages: true}
      });
      // update for lastMessageSent
      await this.prisma.conversation_Message.create({
        data: {
          conversationId: result.id,
          messageId: result.messages[0]?.id
        }
      })
      const data = await this.prisma.conversation.findUnique({
        where: {
          id: result.id,
        },
        include: {
          userCreator: {
            include: {
              Peer: true,
              presence: true,
              UserProfile: true
            }
          },
          userRecipient: true,
          messages: {
            select: { content: true, authorId: true, conversationId: true, attachments: true }
          }
        }
      });
      // return data
      let conversation = cloneDeep(data);
      conversation['createdAt'] = conversation['createdDate'];
      conversation['creator'] = this.reduceProps(conversation['userCreator']);
      conversation['recipient'] = this.reduceProps(conversation['userRecipient']);

      //remove
      delete conversation['createdDate'];
      delete conversation['userCreator'];
      delete conversation['userRecipient'];

      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Create the conversation successfully',
        conversation
      );
    } catch (error: any) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'Create the conversation unsuccessfully',
        error,
      );
    }
  }

  async isCreated(userId: number, recipientId: number) {
    const results = await this.prisma.conversation.findMany({
      where: {
        OR: [
          {
            creator: userId,
            recipient: recipientId,
          },
          {
            creator: recipientId,
            recipient: userId,
          }
        ]
      }
    });
    return results.length > 0 ? true : false;
  }

  async hasAccess({ id, userId }: any) {
    const conversation = await this.findById(id);
    if (!conversation) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'The conversation does not existed',
      );
    } else if (conversation.deletedDate) {
      return this.http.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'This conversation has been deleted',
      );
    }
    return (
      conversation.userCreator?.id === userId || conversation.userRecipient?.id === userId
    );
  }

  async isFriends(creator, recipient) {
    const response = await this.prisma.friend.findMany({
      where: {
        OR: [
          {
            senderId: creator,
            receiverId: recipient
          },
          {
            senderId: recipient,
            receiverId: creator
          }
        ]
      }
    });
    return response.length > 0 ? true : false;
  }

  compactConversationList(conversations) {
    let list = [];
    conversations.forEach(conversation => {
      conversation['lastMessageSent'] = conversation['lastMessageSent'].pop();
      conversation['creator'] = this.reduceProps(conversation['userCreator']);
      conversation['recipient'] = this.reduceProps(conversation['userRecipient']);
      conversation['creatorPeer'] = this.reduceProps(conversation['userCreator'])?.peer;
      conversation['recipientPeer'] = this.reduceProps(conversation['userRecipient'])?.peer;

      delete conversation['userCreator'];
      delete conversation['userRecipient'];
      list.push(conversation);
    })
    return list;
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
