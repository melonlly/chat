import { Module } from '@nestjs/common';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { CatModule } from './CatModule';
import { EventsModule } from 'src/events/EventsModule';

@Module({
    imports: [CatModule, EventsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
