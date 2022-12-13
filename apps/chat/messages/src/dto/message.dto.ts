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
  @IsNotEmpty()
  authorId: number;

  @IsInt()
  @IsNotEmpty()
  conversationId: number;

  @IsOptional()
  @Type(() => AttachmentDto)
  attachments
}
