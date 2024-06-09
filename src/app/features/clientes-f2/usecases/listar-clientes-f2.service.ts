import { Injectable } from '@angular/core';
import { NovoAgendamentoService } from '../../novo-agendamento/services/novo-agendamento.service';
import { ClientesF2Service } from '../services/clientes-f2.service';

@Injectable({ providedIn: 'root' })
export class ListarCLientesF2Service {
  constructor(private service: ClientesF2Service) {}

  listar(callback: any) {
    this.service.listarClientes(callback);
  }
}
