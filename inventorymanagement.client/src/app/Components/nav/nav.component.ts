import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  router: Router = inject(Router);
  authService = inject(AuthService);

  onToggleClick() {
    this.toggleSidebar.emit();
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }
}
