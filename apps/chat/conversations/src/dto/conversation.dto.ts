import { Type } from 'class-transformer';
import { 
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
  ArrayNotEmpty,
  ValidateNested,
 } from 'class-validator';
import { MessageDto } from './index';

export class ConversationDto {
  @IsInt()
  @IsOptional()
  createdBy: number;

  @IsNotEmpty()
  username: string;

  @IsOptional()
  @Type(() => MessageDto)
  messages
}
