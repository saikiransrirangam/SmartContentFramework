import { ArrayMinSize, IsArray, IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateSurveyDto {
  id: number;

  @IsDefined()
  @IsString()
  question: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsArray()
  @ArrayMinSize(1)
  questions: number[];
}
