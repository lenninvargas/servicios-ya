import { Component } from '@angular/core';
import { EmpleoService } from '../../core/services/empleo.service';
import { Empleo } from '../../models/empleo';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadService } from '../../core/services/habilidad.service';
import { Habilidad } from '../../models/Habilidad';

@Component({
  selector: 'app-actualizar-empleo',
  standalone: false,

  templateUrl: './actualizar-empleo.component.html',
  styleUrl: './actualizar-empleo.component.css',
})
export class ActualizarEmpleoComponent {

  habilidades: Habilidad[] = []

  modificarEmpleo: Empleo = {
    id: 0,
    titulo: '',
    descripcion: '',
    fechaPublicada: '',
    presupuesto: 0,
    usuario: {
      id: 0,
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
    },
    habilidad: {
      id: 0,
      nombre: '',
    },
  };

  constructor(
    private empleoService: EmpleoService,
    private habilidadService: HabilidadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.habilidadService.listar().subscribe(data => {
      this.habilidades = data;
    });
    this.obtenerEmpleo();
  }

  obtenerEmpleo() {
    const id = this.route.snapshot.params['id'];
    this.empleoService.buscar(id).subscribe(
      response => {this.modificarEmpleo = response}
    )
  }

  actualizarEmpleo() {
    this.empleoService.actualizar(this.modificarEmpleo.id,
      this.modificarEmpleo).
      subscribe(response => {
        console.log('Empleo actualizado con éxito:', response);
        //this.router.navigate(['/listado']); Aquí lo rediriges al listado
      },
        error => {
          console.error('Error al actualizar el empleo:', error);
        }
      );
  }
}
