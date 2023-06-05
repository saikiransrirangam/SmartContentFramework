import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Zeta Survey API')
    .setDescription('Zeta Survey API Documentation')
    .setVersion('v1')
    .addTag('Surveys')
    .setBasePath('v1')
    .addApiKey({
      type: 'apiKey',
      description: `Test Key fNJTNl7znhmpLBiPk`,
      name: 'x-api-key',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
