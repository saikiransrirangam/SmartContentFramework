import { Injectable, NotFoundException } from '@nestjs/common';

import { surveys } from '../data';
import { questions as availableQuesetions } from '../questions/data';
import { CreateSelectionDto, SelectionDecisionDto } from './dto/create-selection.dto';
import { UpdateSelectionDto } from './dto/update-selection.dto';

const random = (arr) => Math.floor(Math.random() * arr.length);

@Injectable()
export class SelectionsService {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  create(createSurveyDto: CreateSelectionDto) {
    return 'This action adds a new survey';
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - decision
   **-------------------------------------------------------------------------------------
   */
  decision(payload: SelectionDecisionDto) {
    const { questions } = surveys.find((e) => e.id === payload.surveyId);
    const questionIndex = questions.indexOf(payload.questionId);
    if (questionIndex === -1) throw new NotFoundException();
    if (questionIndex === questions.length - 1) return null;
    return availableQuesetions.find(
      (e) => e.id === questions[random(questions)],
    ).id;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  findAll() {
    return `This action returns all surveys`;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findOne
   **-------------------------------------------------------------------------------------
   */
  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - update
   **-------------------------------------------------------------------------------------
   */
  update(id: number, updateSurveyDto: UpdateSelectionDto) {
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
