import { Controller, Get, Query, Param, Post, Body, Delete, UsePipes, UseGuards, UseInterceptors } from '@nestjs/common';
import { CatService } from '../services/CatService';
import { Cat } from 'src/dtos/Cat';
import { CatValidationPipe } from 'src/pipes/CatValidationPipe';
import catSchema from 'src/schema/catSchema';
import { CatGuard } from 'src/guards/CatGuard';
import { Cats } from 'src/decorators/Cats';
import { LoggingInterceptor } from 'src/interceptors/LoggingInterceptor';

@Controller('cat')
@UseGuards(CatGuard)
@UseInterceptors(LoggingInterceptor)
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Post('/add')
    @Cats('black')
    @UsePipes(new CatValidationPipe(catSchema))
    addCat(@Body() cat: Cat): string {
        return this.catService.addCat(cat)
    }

    @Delete('/delete/:name')
    @Cats('red')
    deleteCat(@Param('name') name: string): string {
        return this.catService.deleteCat(name)
    }

    @Post('/update')
    @Cats('yellow')
    @UsePipes(new CatValidationPipe(catSchema))
    updateCat(@Body() cat: Cat): string {
        return this.catService.updateCat(cat)
    }

    @Get('/find')
    @Cats('white')
    findCat(@Query('name') name: string) {
        return this.catService.findCat(name)
    }

}
