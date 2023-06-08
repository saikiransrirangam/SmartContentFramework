import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { WebhooksService } from './webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor(private readonly service: WebhooksService) {}

  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - create
   **-------------------------------------------------------------------------------------
   */
  @Post('strapi')
  @ApiOperation({
    summary: 'Webhook to consume strapi incoming webhook triggers',
    requestBody: {
      description: 'Currently in development',
      required: false,
      content: {},
    },
  })
  create(@Body() payload) {
    return this.service.create(payload);
  }
}
