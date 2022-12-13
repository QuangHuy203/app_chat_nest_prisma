import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserPresenceDto {
  @IsString()
  @IsOptional()
  statusMessage?: string;

  @IsBoolean()
  showOffline: boolean = false;
}
