import { Injectable } from '@nestjs/common';
import { ICreateDTO } from './app.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  pathParams(params: ICreateDTO): string {
    return JSON.stringify(params, null, 2);
  }
  queryParams(params: ICreateDTO): string {
    return JSON.stringify(params, null, 2);
  }
  addPost(params: ICreateDTO): string {
    return JSON.stringify(params, null, 2);
  }
}
