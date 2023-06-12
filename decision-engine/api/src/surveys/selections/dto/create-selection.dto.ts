import { IsDefined, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateSelectionDto {
  _id: number | string;
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
  @ApiProperty({ type: String })
  surveyId: string;
}
