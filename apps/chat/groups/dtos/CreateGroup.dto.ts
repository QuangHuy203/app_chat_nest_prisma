import { ArrayNotEmpty, IsString } from 'class-validator';

export class CreateGroupDto {
  users: string[];

  title: string;
}
