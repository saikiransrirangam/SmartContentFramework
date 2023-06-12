import { CommandModule } from 'nestjs-command';
import { SurveysModule } from 'src/surveys/surveys.module';

import { Module } from '@nestjs/common';

import { SurveySeed } from './survey.seed';

@Module({
  imports: [CommandModule, SurveysModule],
  providers: [SurveySeed],
  exports: [SurveySeed],
})
export class SeedsModule {}
