import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middlewater';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './configs/orm.config';

@Module({
  // adding for nest-config 
  imports: [ConfigModule.forRoot({isGlobal: true}),
  TypeOrmModule.forRootAsync({useClass: ormConfig,}),
  UsersModule, ProjectModule],
  controllers: [AppController, UsersController],
  providers: [AppService,ConfigService, UsersService, ProjectService],
})

// enroll logger middleware 
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
