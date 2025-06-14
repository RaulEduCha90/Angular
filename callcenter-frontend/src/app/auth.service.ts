import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly VALID_USER = 'admin';
  private readonly VALID_PASS = '1234';
  private loggedIn = false;

  login(username: string, password: string): boolean {
    if (username === this.VALID_USER && password === this.VALID_PASS) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
