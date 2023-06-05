import { Module } from '@nestjs/common';

import { QuestionsModule } from './questions/questions.module';
import { ResponsesModule } from './responses/responses.module';
import { SelectionsModule } from './selections/selections.module';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';

@Module({
  imports: [QuestionsModule, SelectionsModule, ResponsesModule],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule {}
