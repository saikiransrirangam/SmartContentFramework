import { Injectable } from '@nestjs/common';

import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Injectable()
export class ResponsesService {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  create(createSurveyDto: CreateResponseDto) {
    return 'This action adds a new survey';
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
  update(id: number, updateSurveyDto: UpdateResponseDto) {
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
