import { Survey, SurveySchema } from 'src/database/schemas/survey.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { QuestionsModule } from './questions/questions.module';
import { ResponsesModule } from './responses/responses.module';
import { SelectionsModule } from './selections/selections.module';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';

@Module({
  imports: [
    QuestionsModule,
    SelectionsModule,
    ResponsesModule,
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
  ],
  controllers: [SurveysController],
  providers: [SurveysService],
  exports: [SurveysService],
})
export class SurveysModule {}
