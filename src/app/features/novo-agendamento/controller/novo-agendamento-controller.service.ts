import { Injectable } from '@angular/core';
import { ListarEstabelecimentosService } from '../usecases/lista-estabelecimentos.service';
import { NovoAgendamentoComponent } from '../components/novo-agendamento.component';
import { ListarCLientesF2Service } from '../../clientes-f2/usecases/listar-clientes-f2.service';

@Injectable({ providedIn: 'root' })
export class NovoAgendamentoControllerService {
  constructor(
    private listarEstabelecimentosService: ListarEstabelecimentosService,
    private listarCLientesF2Service: ListarCLientesF2Service
  ) {}

  async ListarEstabelecimentos(component: NovoAgendamentoComponent) {
    component.estabelecimentos =
      await this.listarEstabelecimentosService.listarEstabelecimentos();

    component.estabelecimentos.map((estabelecimento: any) => {
      estabelecimento.selected = false;
    });

    component.form
      .get('estabelecimento_id')
      ?.setValue(component.estabelecimentos[0].id);
  }

  async listarCLientesF2() {}
}
