import { SetMetadata } from '@nestjs/common';

export const Cats = (...cats: string[]) => SetMetadata('cats', cats);