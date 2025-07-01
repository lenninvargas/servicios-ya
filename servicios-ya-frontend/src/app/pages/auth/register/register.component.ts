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
  successMessage = '';
  errorMessage = '';

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


  selectUsuarioTipo(tipo: 'Empleado' | 'Empleador') {
    this.nuevoUsuario.tipoUsuario = tipo;
    if (tipo === 'Empleador') {
      this.selectedHabilidadId = null;
      this.nuevoUsuario.calificacion = 0;
    }
  }

  register() {
    const dto: any = {
      nombre:      this.nuevoUsuario.nombre,
      apellidoPat: this.nuevoUsuario.apellidoPat,
      apellidoMat: this.nuevoUsuario.apellidoMat,
      fechaNac:    this.nuevoUsuario.fechaNac,
      dni:         this.nuevoUsuario.dni,
      pais:        { id: this.nuevoUsuario.pais.id },
      email:       this.nuevoUsuario.email,
      password:    this.nuevoUsuario.password,
    };

    if (this.nuevoUsuario.tipoUsuario === 'Empleado') {
      dto.habilidadesIds = this.selectedHabilidadId != null
        ? [this.selectedHabilidadId]
        : [];
      this.registerService.registerEmpleado(dto).subscribe(
        res => this.handleSuccess(res),
        err => this.handleError(err)
      );
    } else {
      this.registerService.registerEmpleador(dto).subscribe(
        res => this.handleSuccess(res),
        err => this.handleError(err)
      );
    }
  }

  private handleSuccess(res: any) {
    sessionStorage.setItem('usuario', JSON.stringify(res));
    this.successMessage = '¡Registro exitoso! Bienvenido(a).';
    setTimeout(() => this.successMessage = '', 4000);
    setTimeout(() => this.router.navigate(['/']), 1500);
  }

  private handleError(err: any) {
    this.errorMessage = 'Hubo un error al registrar: ' + (err.error || err.statusText);
    setTimeout(() => this.errorMessage = '', 4000);
  }
}