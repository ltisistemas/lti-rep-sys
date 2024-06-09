import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientesF2Service {
  constructor(private service: FirebaseService) {}

  listarClientes(callback: any) {
    return this.service.getOnSnapshotWithoutQuery({
      table_name: environment.tabelas.clientes,
      callback,
    });
  }
}
