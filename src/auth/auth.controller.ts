import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from '../modules/produtos/dtos/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Fazer login' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    const { email, senha } = loginDto;

    const usuario = await this.authService.validaUsuario(email, senha);
    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return this.authService.login(usuario);
  }
}
