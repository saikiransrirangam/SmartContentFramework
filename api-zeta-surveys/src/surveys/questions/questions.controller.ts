import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateQuestionDto as CreateDto } from './dto/create-question.dto';
import { UpdateQuestionDto as UpdateDto } from './dto/update-question.dto';
import { QuestionsService } from './questions.service';

@Controller({
  version: '1',
  path: 'surveys/:id/questions',
})
export class QuestionsController {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private readonly service: QuestionsService) {}

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
  create(@Body() createQuestionDto: CreateDto) {
    return this.service.create(createQuestionDto);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  @Get()
  @ApiOperation({
    summary: 'Get all questions by survey ID',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns all questions',
  })
  findAll(@Param('id') id: string) {
    return this.service.findAll(+id);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findOne
   **-------------------------------------------------------------------------------------
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Get one question by survery ID',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns one question by survey ID',
  })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - update
   **-------------------------------------------------------------------------------------
   */
  @Patch(':id')
  @ApiOperation({
    summary: 'Not implented yet',
    requestBody: {
      description: 'Currently in development',
      required: false,
      content: {},
    },
  })
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateDto) {
    return this.service.update(+id, updateQuestionDto);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - remove
   **-------------------------------------------------------------------------------------
   */
  @Delete(':id')
  @ApiOperation({
    summary: 'Not implented yet',
    requestBody: {
      description: 'Currently in development',
      required: false,
      content: {},
    },
  })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
