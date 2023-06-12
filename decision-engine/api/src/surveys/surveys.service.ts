import { Model } from 'mongoose';
import { Survey } from 'src/database/schemas/survey.schema';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { surveys } from './data';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Injectable()
export class SurveysService {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructory
   **-------------------------------------------------------------------------------------
   */
  constructor(@InjectModel(Survey.name) private model: Model<Survey>) {}
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  create(payload: CreateSurveyDto) {
    const model = new this.model(payload);
    return model.save();
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  findAll() {
    return this.model.find().exec();
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findOne
   **-------------------------------------------------------------------------------------
   */
  findOne(id: string) {
    return this.model.findById(id);
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - update
   **-------------------------------------------------------------------------------------
   */
  update(id, payload: UpdateSurveyDto) {
    return this.model.updateOne(payload);
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - remove
   **-------------------------------------------------------------------------------------
   */
  remove(id: string) {
    return this.model.updateOne({ id }, { isActive: false });
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - seed
   **-------------------------------------------------------------------------------------
   */
  public async seed() {
    surveys.map(async (item) => {
      const survey = await this.model.findOne({ _id: item._id });
      if (survey) {
        await this.update(survey._id, {
          title: survey.title,
          description: survey.description,
          isActive: survey.isActive,
          questions: survey.questions,
        });
        return;
      }
      await this.create(item);
    });
  }
}
