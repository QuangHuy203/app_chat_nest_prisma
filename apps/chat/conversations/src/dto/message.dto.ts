import { Type } from 'class-transformer';
import {
    IsNotEmpty,
    IsString,
    IsInt,
    IsOptional,
    ArrayNotEmpty,
    ValidateNested,
} from 'class-validator';
import { AttachmentDto } from './index';

export class MessageDto {
    @IsInt()
    @IsOptional()
    createdBy: number;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsInt()
    @IsOptional()
    authorId: number;

    @IsInt()
    @IsOptional()
    conversationId: number;

    @IsInt()
    @IsOptional()
    lastMessageId: number;

    @IsOptional()
    @Type(() => AttachmentDto)
    attachments
}
