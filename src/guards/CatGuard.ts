import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class CatGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        console.log(`进入Cat守卫~`)
        const cats = this.reflector.get<string[]>('cats', context.getHandler());
        console.log(`meta cats: ${ cats }`)
        if (!cats || cats.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = request.headers.token; // 请求头中的token串
        console.log(`token: ${ token }`)
        if (token) {
            const tokens = token.split('-') // black-red-yellow-white：四种权限
            return tokens.some((t) => cats.includes(t));
        } else {
            return false
        }
    }
}