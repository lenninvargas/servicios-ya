import { Component } from '@angular/core';
import { Habilidad } from '../../../models/Habilidad';
import { HabilidadService } from '../../../core/services/habilidad.service';
import { Router } from '@angular/router';
import { RegisterService } from '../../../core/services/auth/register.service';
import { RegisterModel } from '../../../models/RegisterModel';
import { Pais } from '../../../models/Pais';
import { PaisService } from '../../../core/services/pais.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styles: ``,
})
export class RegisterComponent {
  habilidades: Habilidad[] = [];
  paises: Pais[] = [];

  usuario: RegisterModel[] = [];
  nuevoUsuario: RegisterModel = {
    nombre: '',
    apellidoPat: '',
    apellidoMat: '',
    fechaNac: '',
    dni: '',
    pais: { id: 0 },
    email: '',
    password: '',
    habilidades: [],
    tipoUsuario: '',
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
    // Ajustar el objeto para que coincida con lo que espera el backend
    const usuarioParaRegistrar = {
      ...this.nuevoUsuario,
      habilidades: this.nuevoUsuario.habilidades.map(id => ({ id })),
      pais: { id: this.nuevoUsuario.pais.id },
    };

    console.log(usuarioParaRegistrar);
    /*this.registerService.register(usuarioParaRegistrar).subscribe(
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
    );*/
  }
}
