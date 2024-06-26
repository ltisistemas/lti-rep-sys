import { Injectable } from '@angular/core';
import { UsuarioLogadoService } from './usuario-logado.service';

@Injectable({ providedIn: 'root' })
export class UsuarioLogadoUsecaseService {
  constructor(private service: UsuarioLogadoService) {}

  buscarUsuarioLogado() {
    return this.service.buscarUsuarioLogado();
  }
}
