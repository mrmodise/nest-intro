import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, Cat } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('cats')
  async create(@Body() cat: Cat) {
    this.appService.create(cat);
  }

  @Get('cats')
  async findAll() {
    return this.appService.findAll();
  }
}
