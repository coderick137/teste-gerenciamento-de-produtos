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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto, UpdateProdutoDto } from './dtos/produto.dto';
import { Produtos } from './entities/produtos.entity';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createProdutoDto: CreateProdutoDto): Promise<Produtos> {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de produtos retornada com sucesso.',
  })
  findAll(): Promise<CreateProdutoDto[]> {
    return this.produtosService.findAll();
  }

  @Get(':codigo')
  @ApiOperation({ summary: 'Obter um produto pelo código' })
  @ApiResponse({ status: 200, description: 'Produto retornado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  findOne(@Param('codigo') codigo: string): Promise<Produtos> {
    return this.produtosService.findOneByCodigo(codigo);
  }

  @Put(':codigo')
  @ApiOperation({ summary: 'Atualizar um produto pelo código' })
  @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  update(
    @Param('codigo') codigo: string,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ): Promise<Produtos> {
    return this.produtosService.update(codigo, updateProdutoDto);
  }

  @Delete(':codigo')
  @ApiOperation({ summary: 'Remover um produto pelo código' })
  @ApiResponse({ status: 200, description: 'Produto removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  remove(@Param('codigo') codigo: string): Promise<void> {
    return this.produtosService.remove(codigo);
  }
}
