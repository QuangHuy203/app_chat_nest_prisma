import { 
  IsNotEmpty,
  IsInt,
  IsOptional
 } from 'class-validator';

export class DeleteMessageDto {
  @IsInt()
  @IsOptional()
  createdBy: number;

  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  authorId: number;

  @IsInt()
  @IsNotEmpty()
  conversationId: number;
}
