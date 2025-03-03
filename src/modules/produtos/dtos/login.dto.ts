import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsEmail({}, { message: 'O email fornecido é inválido' })
  @ApiProperty({
    example: 'email.teste@email.com',
    description: 'Email do usuário',
  })
  email: string;

  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  @ApiProperty({ example: 'senha-teste', description: 'Senha do usuário' })
  senha: string;
}
