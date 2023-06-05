import { Injectable, NotFoundException } from '@nestjs/common';

import { surveys } from '../data';
import { questions } from './data';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  create(createSurveyDto: CreateQuestionDto) {
    return 'This action adds a new survey';
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  findAll(surveyId: number) {
    const { questions: surveyQuestionIds } =
      surveys.find((e) => e.id === surveyId) || {};
    if (!surveyQuestionIds) throw new NotFoundException();
    return questions.filter((e) => surveyQuestionIds.includes(e.id));
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findOne
   **-------------------------------------------------------------------------------------
   */
  findOne(id: number) {
    return questions.find((e) => e.id === id);
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - update
   **-------------------------------------------------------------------------------------
   */
  update(id: number, updateSurveyDto: UpdateQuestionDto) {
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
