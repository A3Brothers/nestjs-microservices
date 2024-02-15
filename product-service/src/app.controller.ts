import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('testing!!');
    return this.appService.getHello();
  }

  @EventPattern('getHello')
  handleUserCreated() {
    return this.appService.getHello();
  }
}