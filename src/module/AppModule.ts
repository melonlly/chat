import { Module } from '@nestjs/common';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/App';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
