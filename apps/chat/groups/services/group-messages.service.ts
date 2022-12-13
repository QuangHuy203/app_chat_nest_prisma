import { HTTP } from '@common/http';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import {
  CreateGroupMessageParams,
  DeleteGroupMessageParams,
  EditGroupMessageParams,
} from '../../utils/types';
import { PrismaServiceGroup } from '../prisma/prisma.service';

@Injectable()
export class GroupMessageService {
  constructor(private prisma: PrismaServiceGroup, private http: HTTP) {}

  async createGroupMessage(payload: CreateGroupMessageParams) {
    const { groupId, content, authorId } = payload;
    const group = await this.prisma.groups.findUnique({
      where: {
        id: groupId,
      },
      include: {
        users_groups: {
          select: {
            users: true,
            groups: true,
          },
        },
      },
    });
    if (!group)
      throw new HttpException('No Group Found', HttpStatus.BAD_REQUEST);
    const findUser = group.users_groups.find(u => u.users.id === authorId);
    if (!findUser)
      throw new HttpException('User not in group', HttpStatus.BAD_REQUEST);

    return await this.prisma.$transaction(async tx => {
      const groupMessage = await tx.groupMessages.create({
        data: {
          content,
          groupId: group.id,
          authorId: authorId,
        },
      });
      const [groupMessageAttachment, updatedGroup] = await Promise.all([
        tx.groupMessageAttachments.create({
          data: {
            messageId: groupMessage.id,
            key: Date.now().toString(),
          },
        }),
        tx.groups.update({
          where: {
            id: group.id,
          },
          data: {
            last_message_sent_id: groupMessage.id,
          },
        }),
      ]);
      return this.http.setHttpRequest(
        HttpStatus.OK,
        'Create message successfully',
        { message: groupMessage, group: updatedGroup },
      );
    });
  }

  async getGroupMessages(id: number): Promise<any> {
    const messages = await this.prisma.groupMessages.findMany({
      where: { groupId: id },
    });
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Create message successfully',
      messages,
    );
  }

  async deleteGroupMessage(params: DeleteGroupMessageParams): Promise<any> {
    // const group = await this.groupRepository
    //   .createQueryBuilder('group')
    //   .where('group.id = :groupId', { groupId: params.groupId })
    //   .leftJoinAndSelect('group.lastMessageSent', 'lastMessageSent')
    //   .leftJoinAndSelect('group.messages', 'messages')
    //   .orderBy('messages.createdAt', 'DESC')
    //   .limit(5)
    //   .getOne();
    const group = await this.prisma.groups.findUnique({
      where: {
        id: params.groupId,
      },
      include: {
        group_messages: true,
      },
    });

    if (!group)
      throw new HttpException('Group not found', HttpStatus.BAD_REQUEST);
    const message = await this.prisma.groupMessages.findFirst({
      where: {
        id: params.messageId,
      },
    });

    if (!message)
      throw new HttpException('Cannot delete message', HttpStatus.BAD_REQUEST);

    if (group.last_message_sent_id !== message.id)
      return this.prisma.groupMessages.delete({ where: { id: message.id } });

    const size = group.group_messages.length;
    const SECOND_MESSAGE_INDEX = 1;
    if (size <= 1) {
      console.log('Last Message Sent is deleted');
      await this.prisma.groups.update({
        where: {
          id: params.groupId,
        },
        data: {
          last_message_sent_id: null,
        },
      });
    } else {
      console.log('There are more than 1 message');
      const newLastMessage = group.group_messages[SECOND_MESSAGE_INDEX];
      await this.prisma.groups.update({
        where: { id: params.groupId },
        data: { last_message_sent_id: newLastMessage.id },
      });
    }
    const res = await this.prisma.groupMessages.delete({
      where: { id: message.id },
    });
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Delete message successfully',
    );
  }

  async editGroupMessage(params: EditGroupMessageParams): Promise<any> {
    const messageDB = await this.prisma.groupMessages.findFirst({
      where: {
        id: params.messageId,
        authorId: params.userId,
      },
    });
    if (!messageDB)
      throw new HttpException('Cannot Edit Message', HttpStatus.BAD_REQUEST);
    const res = await this.prisma.groupMessages.update({
      where: {
        id: params.messageId,
      },
      data: {
        content: params.content,
      },
    });
    return this.http.setHttpRequest(
      HttpStatus.OK,
      'Update message successfully',
      res,
    );
  }
}
