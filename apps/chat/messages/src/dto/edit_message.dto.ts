import { 
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsString
 } from 'class-validator';

export class EditMessageDto {
  @IsInt()
  @IsOptional()
  updatedBy: number;

  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  authorId: number;

  @IsInt()
  @IsNotEmpty()
  conversationId: number;
}
