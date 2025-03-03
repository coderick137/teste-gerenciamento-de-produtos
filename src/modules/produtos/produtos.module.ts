/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './entities/produtos.entity';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';
const config = configuration();
@Module({
  imports: [
    TypeOrmModule.forFeature([Produtos]),
    JwtModule.register({
      secret: config.jwtSecret,
      signOptions: { expiresIn: '60m' },
    }),
    ConfigModule,
  ],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
