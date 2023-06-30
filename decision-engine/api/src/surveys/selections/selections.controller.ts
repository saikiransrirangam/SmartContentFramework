import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateSelectionDto as CreateDto, SelectionDecisionDto } from './dto/create-selection.dto';
import { UpdateSelectionDto as UpdateDto } from './dto/update-selection.dto';
import { SelectionsService } from './selections.service';

@ApiTags('Selections')
@Controller({
  version: '1',
  path: 'surveys/:id/selections',
})
export class SelectionsController {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private readonly service: SelectionsService) {}

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
  create(@Body() createSelectionDto: CreateDto) {
    return this.service.create(createSelectionDto);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  @Post('decision')
  @ApiOperation({
    summary: 'Returns decision based on question and question value selection',
    requestBody: {
      description: 'A SelectionDecisionDto',
      required: true,
      content: {},
    },
  })
  @ApiBody({ type: SelectionDecisionDto })
  @ApiResponse({
    schema: {
      format: '',
    },
    status: 201,
    description: 'Returns DTO or Null, if null then no further questions',
  })
  decision(@Body() payload: SelectionDecisionDto) {
    return this.service.decision(payload);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  @Get()
  @ApiOperation({
    summary: 'Get all selections by survey ID',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns all selections by survey ID',
  })
  findAll() {
    return this.service.findAll();
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findOne
   **-------------------------------------------------------------------------------------
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Get one selection by survey ID',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns one selection by survey ID',
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
  update(@Param('id') id: string, @Body() updateSelectionDto: UpdateDto) {
    return this.service.update(+id, updateSelectionDto);
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
