import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) { // implement this in your AuthService
    return true;
  } else {
    router.navigate(['/sign-in']);
    return false;
  }
};
