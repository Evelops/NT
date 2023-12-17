import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

// ORM Config 
@Injectable() 
export class ormConfig implements TypeOrmOptionsFactory {
  constructor(private readonly configService:ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
    type: 'mysql',
    host: this.configService.get('DB_HOST'),
    port: this.configService.get<number>('DB_PORT'),
    username: this.configService.get('DB_USERNAME'),
    password: this.configService.get('DB_PASSWORD'),
    database: this.configService.get('DB_DATABASE'),
    synchronize: true, // 개발환경에서만 사용 (production에서는 비활성화)
    logging: true, // 개발환경에서만 사용 (production에서는 비활성화)
    entities: [],
    }
  }
}
