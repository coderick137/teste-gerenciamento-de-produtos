/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './modules/produtos/entities/produtos.entity';
import { ProdutosModule } from './modules/produtos/produtos.module';
import * as dotenv from 'dotenv';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { Usuario } from './modules/usuario/entities/usuario.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Produtos, Usuario],
      synchronize: true,
    }),
    // TypeOrmModule.forFeature([Usuario, Produtos]),
    ProdutosModule,
    UsuarioModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
