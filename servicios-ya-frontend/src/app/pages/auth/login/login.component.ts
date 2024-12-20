import { Component } from '@angular/core';
import { LoginModel } from '../../../models/LoginModel';
import { LoginService } from '../../../core/services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  usuario: LoginModel[] = [];
  nuevoUsuario: LoginModel = {
    email: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  login() {    
    this.loginService.login(this.nuevoUsuario).subscribe(
      (res: any) => {
        console.log('Login exitoso', res);
        // Guardar los datos del usuario en sessionStorage
        sessionStorage.setItem('usuario', JSON.stringify(res));
        this.nuevoUsuario = {
          email: '',
          password: '',
        };
        this.router.navigate(['/']);
      },
      (error: any) => {        
        if (error.status === 401) {
          alert(error.error);
        } else {
          alert('Error en el login');
        }
      },
    );
  }
}
