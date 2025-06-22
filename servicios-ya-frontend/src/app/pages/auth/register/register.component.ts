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
  successMessage: string = '';
  errorMessage: string = '';

  selectedHabilidadId: number | null = null;

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
    private router: Router
  ) {}

  ngOnInit() {
    this.habilidadService.listar().subscribe(data => this.habilidades = data);
    this.paisService.listar().subscribe(data => this.paises = data);
  }

  selectUsuarioTipo(tipo: 'Empleado'|'Empleador') {
    this.nuevoUsuario.tipoUsuario = tipo;
    if (tipo === 'Empleador') {
      this.nuevoUsuario.habilidades = [];
      this.nuevoUsuario.calificacion = 0;
    }
  }

  register() {
    const payload: RegisterModel = {
      ...this.nuevoUsuario,
      pais: { id: this.nuevoUsuario.pais.id },
      habilidades:
        this.nuevoUsuario.tipoUsuario === 'Empleado' && this.selectedHabilidadId != null
          ? [{ id: this.selectedHabilidadId }]
          : [],
    };

    if (payload.tipoUsuario === 'Empleador') {
      delete (payload as any).habilidades;
      delete (payload as any).calificacion;
    }

    this.registerService.register(payload).subscribe(
      res => {
        sessionStorage.setItem('usuario', JSON.stringify(res));
        this.successMessage = '¡Registro exitoso! Bienvenido(a).';
        setTimeout(() => this.successMessage = '', 4000);
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      err => {
        this.errorMessage = 'Hubo un error al registrar: ' + (err.error || err.statusText);
        setTimeout(() => this.errorMessage = '', 4000);
      }
    );
  }
}