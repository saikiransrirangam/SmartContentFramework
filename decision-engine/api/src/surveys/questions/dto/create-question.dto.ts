import { Type } from 'class-transformer';
import {
    ArrayMinSize, IsArray, IsDefined, IsOptional, IsString, ValidateNested
} from 'class-validator';

class Option {
  @IsDefined()
  @IsString()
  label: string;

  @IsDefined()
  value: string | boolean | number;
}

export class CreateQuestionDto {
  id: number;

  @IsDefined()
  @IsString()
  question: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => Option)
  options: Option[];
}
