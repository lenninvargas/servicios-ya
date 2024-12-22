import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../core/services/auth/register.service';
import { HabilidadService } from '../../../core/services/habilidad.service';
import { PaisService } from '../../../core/services/pais.service';
import { RegisterModel } from '../../../models/RegisterModel';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styles: ``,
})
export class RegisterComponent implements OnInit {
  habilidades: any[] = [];
  paises: any[] = [];

  nuevoUsuario: RegisterModel = {
    nombre: '',
    apellidoPat: '',
    apellidoMat: '',
    fechaNac: '',
    dni: '',
    pais: { id: 1 },
    email: '',
    password: '',
    habilidades: [],
    tipoUsuario: 'Empleado',
    calificacion: 0,
  };

  constructor(
    private habilidadService: HabilidadService,
    private paisService: PaisService,
    private registerService: RegisterService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.habilidadService.listar().subscribe(data => {
      this.habilidades = data;
    });

    this.paisService.listar().subscribe(data => {
      this.paises = data;
    });
  }

  register() {
    if (
      !this.nuevoUsuario.nombre ||
      !this.nuevoUsuario.apellidoPat ||
      !this.nuevoUsuario.apellidoMat ||
      !this.nuevoUsuario.fechaNac ||
      !this.nuevoUsuario.dni ||
      !this.nuevoUsuario.email ||
      !this.nuevoUsuario.password
    ) {
      alert('Debe completar todos los campos');
      return;
    }
    // Ajustar el objeto para que coincida con lo que espera el backend
    const usuarioParaRegistrar: RegisterModel = {
      ...this.nuevoUsuario,
      habilidades: this.nuevoUsuario.habilidades.map(id => ({
        id: Number(id),
      })),
      pais: { id: this.nuevoUsuario.pais.id },
    };

    console.log(usuarioParaRegistrar);
    this.registerService.register(usuarioParaRegistrar).subscribe(
      (res: any) => {
        console.log('Registro exitoso', res);
        sessionStorage.setItem('usuario', JSON.stringify(res));
        this.router.navigate(['/']);
      },
      (error: any) => {
        if (error.status === 400) {
          console.log(error.error);
          alert('Error: ' + error.error.message);
        } else if (error.status === 500) {
          alert('Error interno del servidor: ' + error.error);
        } else if (error.status === 401) {
          alert('No autorizado: ' + error.error);
        } else {
          alert('Error en el registro');
        }
      },
    );
  }
}
