import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Create an Account on UIXLabs!!!';
  }
}
