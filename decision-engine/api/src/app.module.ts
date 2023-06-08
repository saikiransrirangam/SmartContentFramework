import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveysModule } from './surveys/surveys.module';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [SurveysModule, WebhooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
