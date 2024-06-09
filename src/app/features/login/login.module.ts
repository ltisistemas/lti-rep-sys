import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { EfetuarLoginService } from './use-cases/efetuar-login.service';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login.component';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [EfetuarLoginService, LoginService],
})
export class LoginModule {}
