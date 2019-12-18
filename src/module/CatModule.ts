import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatController } from '../controllers/CatController';
import { CatService } from '../services/CatService';
import { CatMiddleware } from 'src/middleware/CatMiddleware';

@Module({
    imports: [],
    controllers: [CatController],
    providers: [CatService],
})
export class CatModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(CatMiddleware)
            .forRoutes({
                path: 'cat',
                method: RequestMethod.ALL
            })
    }
}
