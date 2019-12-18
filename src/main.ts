import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/AppModule';
import { logger } from './middleware/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger)
  await app.listen(3000);
}
bootstrap();
