import { IsDefined, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateSelectionDto {
  id: number;
  @IsDefined()
  selection: number | string | Boolean;
  @IsDefined()
  @IsNumber()
  questionId: number;
}

export class SelectionDecisionDto {
  @IsDefined()
  @ApiProperty({ type: Number })
  selection: number | string | Boolean;
  @IsDefined()
  @IsNumber()
  @ApiProperty({ type: Number })
  questionId: number;
  @IsDefined()
  @IsNumber()
  @ApiProperty({ type: Number })
  surveyId: number;
}
