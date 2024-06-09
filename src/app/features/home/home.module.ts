import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from '../main/main.component';
import { NovoAgendamentoComponent } from '../novo-agendamento/components/novo-agendamento.component';
import { NovoAgendamentoModule } from '../novo-agendamento/novo-agendamento.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NovoAgendamentoModule,
  ],
  exports: [],
  declarations: [HomeComponent, MainComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
