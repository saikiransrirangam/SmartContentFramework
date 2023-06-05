import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateResponseDto as CreateDto } from './dto/create-response.dto';
import { UpdateResponseDto as UpdateDto } from './dto/update-response.dto';
import { ResponsesService } from './responses.service';

@Controller({
  version: '1',
  path: 'surveys/:id/responses',
})
export class ResponsesController {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private readonly service: ResponsesService) {}

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
  create(@Body() createResponseDto: CreateDto) {
    return this.service.create(createResponseDto);
  }

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - findAll
   **-------------------------------------------------------------------------------------
   */
  @Get()
  @ApiOperation({
    summary: 'Get all responses by survey ID',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns all responses by survey ID',
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
    summary: 'Get one response by survey ID',
    requestBody: {
      description: 'x',
      required: false,
      content: {},
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returns one response by survey ID',
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
  update(@Param('id') id: string, @Body() updateResponseDto: UpdateDto) {
    return this.service.update(+id, updateResponseDto);
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
