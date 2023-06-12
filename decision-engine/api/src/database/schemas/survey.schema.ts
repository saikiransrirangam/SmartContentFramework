import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SurveyDocument = mongoose.HydratedDocument<Survey>;
@Schema()
export class Survey {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    type: [mongoose.Schema.Types.Number],
  })
  questions: number[];

  @Prop({
    type: mongoose.Schema.Types.Boolean,
  })
  isActive: boolean;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
