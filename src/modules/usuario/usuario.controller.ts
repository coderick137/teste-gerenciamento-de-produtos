import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioDto } from './dtos/usuario.dto';
import { Public } from '../../auth/decorators/public.decorator';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async criarUsuario(@Body() createUsuarioDto: UsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Listagem de usuários.' })
  async listarUsuarios(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }
}
