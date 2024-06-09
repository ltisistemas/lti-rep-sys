import { Injectable } from '@angular/core';
import { NovoAgendamentoService } from '../services/novo-agendamento.service';

@Injectable({ providedIn: 'root' })
export class ListarEstabelecimentosService {
  constructor(private service: NovoAgendamentoService) {}

  listarEstabelecimentos() {
    return this.service.listarEstabelecimentos();
  }
}
