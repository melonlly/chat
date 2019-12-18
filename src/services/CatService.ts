import { Injectable } from '@nestjs/common';
import { Cat } from 'src/dtos/Cat';

@Injectable()
export class CatService {
    addCat(cat: Cat): string {
        return `add a cat : ${ cat }`
    }
    deleteCat(name: string = ''): string {
        return `delete a cat : ${ name }`
    }
    updateCat(cat: Cat): string {
        return `update a cat : ${ cat }`
    }
    findCat(name: string = ''): string {
        return `find a cat : ${ name }`
    }
}
