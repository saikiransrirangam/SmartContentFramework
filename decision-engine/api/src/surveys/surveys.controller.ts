import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateSurveyDto as CreateDto } from './dto/create-survey.dto';
import { UpdateSurveyDto as UpdateDto } from './dto/update-survey.dto';
import { SurveysService } from './surveys.service';

@Controller({
  version: '1',
  path: 'surveys',
})
export class SurveysController {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private readonly service: SurveysService) {}

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  @Post()
  @ApiOperation({
    summary: 'Not implented yet',
    requestBody: {
      description: 'Currently in development',
      required: false,
      content: {},
    },
  })
  create(@Body() createSurveyDto: CreateDto) {
    return this.service.create(createSurveyDto);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  @Get()
  @ApiOperation({
    summary: 'Get all surveys',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns all surveys',
  })
  findAll() {
    return this.service.findAll();
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - Seed
   **-------------------------------------------------------------------------------------
   */
  @Get('seed')
  @ApiOperation({
    summary: 'Seed all surveys',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Seed surveys',
  })
  seed() {
    return this.service.seed();
  }
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findOne
   **-------------------------------------------------------------------------------------
   */
  @Get(':id')
  @Get()
  @ApiOperation({
    summary: 'Get one survey by ID',
    requestBody: {
      description: 'Get one',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns one Survey',
  })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - update
   **-------------------------------------------------------------------------------------
   */
  @Patch(':id')
  @ApiOperation({
    summary: 'Updates one record',
    requestBody: {
      description: 'update survey',
      required: false,
      content: {},
    },
  })
  update(@Param('id') id: string, @Body() updateSurveyDto: UpdateDto) {
    return this.service.update(id, updateSurveyDto);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - remove
   **-------------------------------------------------------------------------------------
   */
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one record',
    requestBody: {
      description: 'Delete one record set isActive to false',
      required: false,
      content: {},
    },
  })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
