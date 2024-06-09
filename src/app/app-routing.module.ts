import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
// import { HomeModule } from "./pages/home/home.module";
// import { LoginModule } from "./pages/login/login.module";
// import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => HomeModule,
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => LoginModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
