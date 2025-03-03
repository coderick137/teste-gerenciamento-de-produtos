/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutoDto, UpdateProdutoDto } from './dtos/produto.dto';
import { Produtos } from './entities/produtos.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() createProdutoDto: ProdutoDto): Promise<Produtos> {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll(): Promise<ProdutoDto[]> {
    return this.produtosService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: string): Promise<Produtos> {
    return this.produtosService.findOneByCodigo(codigo);
  }

  @Put(':codigo')
  update(
    @Param('codigo') codigo: string,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ): Promise<Produtos> {
    return this.produtosService.update(codigo, updateProdutoDto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: string): Promise<void> {
    return this.produtosService.remove(codigo);
  }
}
