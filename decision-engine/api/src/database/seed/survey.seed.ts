import { Command } from 'nestjs-command';
import { surveys } from 'src/surveys/data';
import { SurveysService } from 'src/surveys/surveys.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveySeed {
  constructor(private readonly service: SurveysService) {}

  @Command({
    command: 'create:survey',
    describe: 'creates surveys',
  })
  async create() {
    surveys.map(async (item) => {
      console.log(item);
      const survey = await this.service.create(item);
    });
  }
}
