import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ICreateDTO } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/pathParams/:id/:name/:age')
  pathParams(@Param() params: ICreateDTO): string {
    return this.appService.pathParams(params);
  }
  @Get('/queryParams')
  queryParams(
    @Query()
    query: ICreateDTO,
  ): string {
    return this.appService.queryParams(query);
  }
  @Post('/addPost')
  addPost(@Body(new ValidationPipe()) body: ICreateDTO): string {
    return this.appService.addPost(body);
  }
}
