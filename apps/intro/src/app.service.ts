import { Injectable } from '@nestjs/common';

export interface Cat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class AppService {
  private readonly cats: Cat[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  create(cat: Cat) {
    return this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
