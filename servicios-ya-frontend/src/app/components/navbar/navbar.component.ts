import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styles: [
    `
      .px-300 {
        padding-left: 300px;
        padding-right: 300px;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  tipoUsuario: string | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const usuarioStr = sessionStorage.getItem('usuario');
      if (usuarioStr) {
        const usuario = JSON.parse(usuarioStr);
        this.isLoggedIn = true;
        this.tipoUsuario = usuario.tipoUsuario || null;
      }
    }
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('usuario');
      this.isLoggedIn = false;
      this.tipoUsuario = null;
      this.router.navigate(['/']);
    }
  }
}
