import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/AppModule';
import { logger } from './middleware/logger';
import { GlobalGuard } from './guards/GlobalGuard';
import { LoggingInterceptor } from './interceptors/LoggingInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new GlobalGuard()) // 全局守卫
  // app.useGlobalInterceptors(new LoggingInterceptor()) // 全局拦截器
  app.use(logger) // 全局中间件
  await app.listen(3000);
}
bootstrap();
