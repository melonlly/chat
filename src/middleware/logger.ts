import { Request, Response } from "express";

export function logger(req: Request, res: Response, next: Function) {
    console.log('global function middleware...');
    next();
}