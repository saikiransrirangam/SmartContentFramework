import { Injectable } from '@nestjs/common';

import { surveys } from './data';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Injectable()
export class SurveysService {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  create(createSurveyDto: CreateSurveyDto) {
    return 'This action adds a new survey';
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  findAll() {
    return surveys.map((survey) => {
      return { ...survey };
    });
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findOne
   **-------------------------------------------------------------------------------------
   */
  findOne(id: number) {
    return surveys.find((e) => e.id === id);
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - update
   **-------------------------------------------------------------------------------------
   */
  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - remove
   **-------------------------------------------------------------------------------------
   */
  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
