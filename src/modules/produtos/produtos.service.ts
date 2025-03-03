/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtos } from './entities/produtos.entity';
import { ProdutoDto, UpdateProdutoDto } from './dtos/produto.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private readonly produtosRepository: Repository<Produtos>,
  ) {}

  async create(createProdutoDto: ProdutoDto): Promise<Produtos> {
    const produto = this.produtosRepository.create(createProdutoDto);
    return this.produtosRepository.save(produto);
  }

  async findAll(): Promise<ProdutoDto[]> {
    return this.produtosRepository.find();
  }

  async findOneByCodigo(codigo: string): Promise<Produtos> {
    const produto = await this.produtosRepository.findOne({
      where: { codigo },
    });
    if (!produto) {
      throw new NotFoundException(
        `Produto com código ${codigo} não encontrado`,
      );
    }
    return produto;
  }

  async update(
    codigo: string,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<Produtos> {
    const produto = await this.produtosRepository.preload({
      codigo,
      ...updateProdutoDto,
    });
    if (!produto) {
      throw new NotFoundException(
        `Produto com código ${codigo} não encontrado`,
      );
    }
    return this.produtosRepository.save(produto);
  }

  async remove(codigo: string): Promise<void> {
    const resultado = await this.produtosRepository.delete({ codigo });
    if (!resultado.affected) {
      throw new NotFoundException(
        `Produto com código ${codigo} não encontrado`,
      );
    }
  }
}
