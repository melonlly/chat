import { Controller, Get, Req, Redirect, Query, Param, Post, Body, Delete } from '@nestjs/common';
import { CatService } from '../services/CatService';
import { Cat } from 'src/dtos/Cat';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Post('/add')
    addCat(@Body() cat: Cat): string {
        return this.catService.addCat(cat)
    }

    @Delete('/delete')
    deleteCat(@Param('name') name: string): string {
        return this.catService.deleteCat(name)
    }

    @Post('/update')
    updateCat(@Body() cat: Cat): string {
        return this.catService.updateCat(cat)
    }

    @Get('/find')
    findCat(@Query('name') name: string) {
        return this.catService.findCat(name)
    }

}
