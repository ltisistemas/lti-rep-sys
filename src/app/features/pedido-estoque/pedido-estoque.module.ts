import { NgModule } from '@angular/core';
import { PedidoEstoqueComponent } from './components/pedido-estoque.component';
import { PedidoEstoqueControllerService } from './controllers/pedido-estoque-controller.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [PedidoEstoqueComponent],
  providers: [PedidoEstoqueControllerService],
})
export class PedidoEstoqueModule {}
