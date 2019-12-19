import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/AppModule';
import { logger } from './middleware/logger';
import { GlobalGuard } from './guards/GlobalGuard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new GlobalGuard())
  app.use(logger)
  await app.listen(3000);
}
bootstrap();
