import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './features/login/login.module';
import { FirebaseService } from './shared/services/firebase.service';
import { GenerateJwtService } from './shared/services/generate-jwt.service';
import { LocalStorageService } from './shared/services/localstorage.service';
import { LtiLoadingService } from './shared/services/lti-loading.service';
import { UtilsService } from './core/utils/utils.service';
import { HomeModule } from './features/home/home.module';
import { UsuarioLogadoUsecaseService } from './shared/services/usuario-logado-usecase.service';
import { UsuarioLogadoService } from './shared/services/usuario-logado.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DarkThemeService } from './shared/services/dark-theme.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule,
  ],
  providers: [
    LtiLoadingService,
    LocalStorageService,
    GenerateJwtService,
    FirebaseService,
    UtilsService,
    UsuarioLogadoService,
    UsuarioLogadoUsecaseService,
    DarkThemeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
