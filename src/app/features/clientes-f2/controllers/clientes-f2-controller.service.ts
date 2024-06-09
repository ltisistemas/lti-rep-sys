import { Injectable } from '@angular/core';
import { ListarCLientesF2Service } from '../usecases/listar-clientes-f2.service';
import { ClientesF2Component } from '../components/clientes-f2.component';

@Injectable({ providedIn: 'root' })
export class ClientesF2ControllerService {
  constructor(private listarCLientesF2Service: ListarCLientesF2Service) {}

  listarCLientesF2(component: ClientesF2Component) {
    this.listarCLientesF2Service.listar(() => {});
  }
}
