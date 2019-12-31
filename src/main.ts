import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/AppModule';
import { logger } from './middleware/logger';
import { GlobalGuard } from './guards/GlobalGuard';
import { LoggingInterceptor } from './interceptors/LoggingInterceptor';
import { MyIoAdapter } from './gateway/MyIoAdapter';
// import { RedisIoAdapter } from './gateway/RedisIoAdapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useWebSocketAdapter(new RedisIoAdapter(app))
  app.useWebSocketAdapter(new MyIoAdapter(app))
  app.useGlobalGuards(new GlobalGuard()) // 全局守卫
  // app.useGlobalInterceptors(new LoggingInterceptor()) // 全局拦截器
  app.use(logger) // 全局中间件
  await app.listen(3000);
}
bootstrap();
