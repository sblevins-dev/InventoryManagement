import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen = false;
  showLayout = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Only show layout for authenticated routes
      const protectedRoutes = ['/dashboard', '/orders', '/suppliers', '/products'];
      this.showLayout = protectedRoutes.some(r => event.urlAfterRedirects.startsWith(r));
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  title = 'inventorymanagement.client';
}
