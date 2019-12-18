import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { CatModule } from './CatModule';
import { LoggerMiddleware } from 'src/middleware/LoggerMiddleware';

@Module({
    imports: [CatModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({
                path: 'cat',
                method: RequestMethod.ALL
            })
    }
}
