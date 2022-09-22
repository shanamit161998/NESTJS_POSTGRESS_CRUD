import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/products/products.controller';
import { ProductsService } from './modules/products/products.service';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'sugarcrud',
      entities: [],
    }),
    ProductsModule
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
  exports:[]
})
export class AppModule {}
