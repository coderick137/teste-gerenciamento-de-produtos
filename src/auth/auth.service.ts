/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../modules/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

interface UsuarioPayload {
  email: string;
  id: number;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}
  async login(email: string, senha: string) {
    const usuario = await this.usuarioService.findByEmail(email);
    if (usuario?.senha !== senha) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const payload: UsuarioPayload = { email, id: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
