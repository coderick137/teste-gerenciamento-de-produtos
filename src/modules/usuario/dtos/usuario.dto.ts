import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UsuarioDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsString()
  @IsNotEmpty({ message: 'Nome do usuário é obrigatório' })
  nome: string;

  @ApiProperty({ description: 'Email do usuário' })
  @IsString()
  @IsNotEmpty({ message: 'Email do usuário é obrigatório' })
  email: string;

  @ApiProperty({ description: 'Senha do usuário' })
  @IsString()
  @IsNotEmpty({ message: 'Senha do usuário é obrigatória' })
  senha: string;
}
