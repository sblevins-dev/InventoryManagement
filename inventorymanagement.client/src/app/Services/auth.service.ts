import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // could be managed via token in localStorage

  login(token: string) {
    localStorage.setItem('accessToken', token);
    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
