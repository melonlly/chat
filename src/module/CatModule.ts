import { Module } from '@nestjs/common';
import { CatController } from '../controllers/CatController';
import { CatService } from '../services/CatService';

@Module({
    imports: [],
    controllers: [CatController],
    providers: [CatService],
})
export class CatModule { }
