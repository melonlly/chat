import { Module } from '@nestjs/common';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { CatModule } from './CatModule';

@Module({
    imports: [CatModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
