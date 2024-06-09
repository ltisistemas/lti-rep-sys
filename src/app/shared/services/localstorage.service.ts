import { Injectable } from '@angular/core';
import { UsuarioLogado } from 'src/app/core/models/usuario-logado';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  setStore(usuarioLogado: UsuarioLogado, accessToken: string) {
    localStorage.removeItem(environment.storage.usuario);
    localStorage.removeItem(environment.storage.token);

    localStorage.setItem(
      environment.storage.usuario,
      JSON.stringify(usuarioLogado)
    );
    localStorage.setItem(environment.storage.token, accessToken);
  }

  clearStorege() {
    localStorage.removeItem(environment.storage.usuario);
    localStorage.removeItem(environment.storage.token);
  }
}
