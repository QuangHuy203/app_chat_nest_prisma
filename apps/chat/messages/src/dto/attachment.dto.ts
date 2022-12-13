import { Type } from 'class-transformer';
import {
    IsNotEmpty,
    IsInt,
    IsOptional,
    ArrayNotEmpty,
    ValidateNested,
} from 'class-validator';
import {FileAttachedDto} from './file_attached.dto';

export class AttachmentDto {
    @IsInt()
    @IsOptional()
    createdBy: number;

    @IsInt()
    @IsNotEmpty()
    messageId: number;

    @IsOptional()
    @Type(() => FileAttachedDto)
    attachments
}
