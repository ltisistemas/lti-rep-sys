import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GenerateJwtService } from 'src/app/shared/services/generate-jwt.service';
import { environment } from 'src/environments/environment';

export const AuthGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  const token = localStorage.getItem(environment.storage.token);
  if (!token) {
    router.navigate(['login']);
    return false;
  }

  const auth = isAuthenticated(token);
  if (!auth) {
    router.navigate(['login']);
    return false;
  }

  return true;
};

const isAuthenticated = (token: string) => {
  const jwt: GenerateJwtService = inject(GenerateJwtService);

  return !jwt.isTokenExpired(token);
};
