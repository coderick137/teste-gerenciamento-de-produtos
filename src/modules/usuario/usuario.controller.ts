import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { JwtAuthGuard } from '../../auth/auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criarUsuario(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.create(usuarioData);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async listarUsuarios(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }
}
