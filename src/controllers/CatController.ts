import { Controller, Get, Query, Param, Post, Body, Delete, UsePipes } from '@nestjs/common';
import { CatService } from '../services/CatService';
import { Cat } from 'src/dtos/Cat';
import { CatValidationPipe } from 'src/pipes/CatValidationPipe';
import catSchema from 'src/schema/catSchema';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Post('/add')
    @UsePipes(new CatValidationPipe(catSchema))
    addCat(@Body() cat: Cat): string {
        return this.catService.addCat(cat)
    }

    @Delete('/delete/:name')
    deleteCat(@Param('name') name: string): string {
        return this.catService.deleteCat(name)
    }

    @Post('/update')
    @UsePipes(new CatValidationPipe(catSchema))
    updateCat(@Body() cat: Cat): string {
        return this.catService.updateCat(cat)
    }

    @Get('/find')
    findCat(@Query('name') name: string) {
        return this.catService.findCat(name)
    }

}
