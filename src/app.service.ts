import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  //.env에서 파일 가져올 때, process.env X => this.configService.get("data") => 형식으로 받아오도록 변경 
  constructor(private readonly configService:ConfigService) {} 


  getHello(): string {
    // return 'Hello World!';
    return "hello"
  }

  postHello(): string{
    return 'hello post test';
  }

  
}


