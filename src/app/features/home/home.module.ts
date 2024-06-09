import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from '../main/main.component';
import { PedidoEstoqueComponent } from '../pedido-estoque/components/pedido-estoque.component';
import { PedidoEstoqueControllerService } from '../pedido-estoque/controllers/pedido-estoque-controller.service';
import { PedidoEstoqueModule } from '../pedido-estoque/pedido-estoque.module';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [],
  declarations: [HomeComponent, MainComponent],
  providers: [PedidoEstoqueControllerService, PedidoEstoqueModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
