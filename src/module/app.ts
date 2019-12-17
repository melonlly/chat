import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app';
import { AppService } from '../services/app';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
