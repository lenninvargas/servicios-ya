import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  getUsuario(): any {
    const data = sessionStorage.getItem('usuario');
    return data ? JSON.parse(data) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('usuario');
  }
}