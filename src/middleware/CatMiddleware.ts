import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CatMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log('cat Request...');
        next();
    }
}