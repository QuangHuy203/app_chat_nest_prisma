import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsInt,
} from 'class-validator';

export class FileAttachedDto {
    @IsInt()
    @IsOptional()
    createdBy: number;

    @IsString()
    @IsNotEmpty()
    fileName: string;

    @IsString()
    @IsNotEmpty()
    baseUrl: string;
}
