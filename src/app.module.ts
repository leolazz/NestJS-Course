import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import * as Joi from '@hapi/joi';
import appConfig from './config/app.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,// database host
        port: +process.env.DATABASE_PORT, // database host
        username: process.env.DATABASE_USER, // username
        password: process.env.DATABASE_PASSWORD, // user password
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true, // models will be loaded automatically 
        synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
      }),
    }), 
    CoffeeRatingModule, DatabaseModule,
    ConfigModule.forRoot({
      load: [appConfig]
    }),
    CoffeesModule,
    CommonModule, 
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
