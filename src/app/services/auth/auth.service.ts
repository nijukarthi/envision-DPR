import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

/* @Injectable({
  providedIn: 'root' AuthService
}) */
  export const AuthService: CanActivateFn = (route, state) => {
    const router = inject(Router);
  
    // Example: Check if the user is authenticated (implement your own logic)
    const isAuthenticated = !!localStorage.getItem('Token'); // Replace with real auth logic
  
    if (isAuthenticated) {
      return true; // Allow navigation
    }
  
    // Redirect to login if not authenticated
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  };
