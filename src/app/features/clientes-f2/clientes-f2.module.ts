import { NgModule } from '@angular/core';
import { ClientesF2Service } from './services/clientes-f2.service';
import { ListarCLientesF2Service } from './usecases/listar-clientes-f2.service';
import { ClientesF2Component } from './components/clientes-f2.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientesF2ControllerService } from './controllers/clientes-f2-controller.service';

@NgModule({
  imports: [SharedModule],
  exports: [ClientesF2Component],
  declarations: [ClientesF2Component],
  providers: [
    ListarCLientesF2Service,
    ClientesF2Service,
    ClientesF2ControllerService,
  ],
})
export class ClientesF2Module {}
