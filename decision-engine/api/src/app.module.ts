import { CommandModule } from 'nestjs-command';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedsModule } from './database/seed/seeds.module';
import { SurveysModule } from './surveys/surveys.module';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [
    SurveysModule,
    WebhooksModule,
    CommandModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    SeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
