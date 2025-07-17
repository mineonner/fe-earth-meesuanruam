import { inject } from '@angular/core';
import {
  Router,
  NavigationExtras,
} from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!!authService.accessToken) {
    return true;
  }

  return router.createUrlTree(['/admin/login']);
};
