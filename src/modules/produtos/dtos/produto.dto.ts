import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @ApiProperty({ description: 'Código do produto' })
  @IsString()
  @IsNotEmpty({ message: 'Código do produto é obrigatório' })
  codigo: string;

  @ApiProperty({ description: 'Nome do produto' })
  @IsString()
  @IsNotEmpty({ message: 'Nome do produto é obrigatório' })
  nome: string;

  @ApiProperty({ description: 'Código de barras do produto', required: false })
  @IsString()
  @IsOptional()
  codigo_barras?: string;

  @ApiProperty({ description: 'Quantidade do produto', minimum: 0 })
  @IsNumber()
  @Type(() => Number)
  @Min(0, { message: 'Quantidade do produto é obrigatória' })
  quantidade: number;

  @ApiProperty({ description: 'Preço do produto', minimum: 0 })
  @IsNumber()
  @Type(() => Number)
  @Min(0, { message: 'Preço do produto é obrigatório' })
  preco: number;
}

export class UpdateProdutoDto {
  @ApiProperty({ description: 'Código do produto', required: false })
  @IsString()
  @IsOptional()
  codigo?: string;

  @ApiProperty({ description: 'Nome do produto', required: false })
  @IsString()
  @IsOptional()
  nome?: string;

  @ApiProperty({ description: 'Código de barras do produto', required: false })
  @IsString()
  @IsOptional()
  codigo_barras?: string;

  @ApiProperty({
    description: 'Quantidade do produto',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(0, { message: 'Quantidade do produto é obrigatória' })
  quantidade?: number;

  @ApiProperty({ description: 'Preço do produto', minimum: 0, required: false })
  @IsNumber()
  @Type(() => Number)
  @Min(0, { message: 'Preço do produto é obrigatório' })
  preco?: number;
}
