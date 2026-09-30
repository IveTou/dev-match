import { Injectable } from '@nestjs/common';

@Injectable()// Decare that this is a provider then you can inject it into a controller via the constructor
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
