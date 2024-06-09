import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { UsuarioLogado } from 'src/app/core/models/usuario-logado';

@Injectable({ providedIn: 'root' })
export class UsuarioLogadoService {
  constructor(private api: FirebaseService) {}

  buscarUsuarioLogado() {
    const usuario = this.api.getUsuarioLogado()! as UsuarioLogado;

    return usuario;
  }
}
