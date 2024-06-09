import { NgModule } from '@angular/core';
import { NovoAgendamentoControllerService } from './controller/novo-agendamento-controller.service';
import { NovoAgendamentoService } from './services/novo-agendamento.service';
import { ListarEstabelecimentosService } from './usecases/lista-estabelecimentos.service';
import { NovoAgendamentoComponent } from './components/novo-agendamento.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientesF2Module } from '../clientes-f2/clientes-f2.module';

@NgModule({
  imports: [CommonModule, SharedModule, ClientesF2Module],
  exports: [NovoAgendamentoComponent],
  declarations: [NovoAgendamentoComponent],
  providers: [
    NovoAgendamentoControllerService,
    ListarEstabelecimentosService,
    NovoAgendamentoService,
  ],
})
export class NovoAgendamentoModule {}
