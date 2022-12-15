import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/product.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { BannerModule } from './banner/banner.module';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Log4jsModule } from './libs/log4js/';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configDefault from '../config/config.default';

@Module({
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      load: [configDefault],
    }),
    // TypeOrm模块
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('mysql.host'),
        port: +configService.get('mysql.port'),
        username: configService.get('mysql.username'),
        password: configService.get('mysql.password'),
        database: configService.get('mysql.database'),
        synchronize: configService.get('mysql.synchronize'),
        autoLoadEntities: true,
        keepConnectionAlive: true,
      }),
    }),
    // 静态资源模块
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'public'),
        serveRoot: '/',
      },
      {
        rootPath: join(__dirname, '..', 'uploads'),
        serveRoot: '/uploads',
      },
    ),
    // 日志模块
    Log4jsModule.forRoot(),
    // 业务模块...
    UsersModule,
    ProductsModule,
    ProductCategoriesModule,
    AboutModule,
    HomeModule,
    BannerModule,
    UploadModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
