import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostulanteService } from '../../../core/services/applications/postulante.service';

@Component({
  selector: 'app-editapplications',
  standalone: false,
  templateUrl: './editapplications.component.html',
  styleUrls: ['./editapplications.component.css']
})
export class EditapplicationsComponent implements OnInit {
  idUsuario!: number;
  idEmpleo!: number;
  postulacion: any;

  constructor(
    private postulanteService: PostulanteService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idUsuario = +params.get('idUsuario')!;  
      this.idEmpleo = +params.get('idEmpleo')!;
      this.obtenerPostulacion();
    });
  }

  obtenerPostulacion(): void {
    this.postulanteService.obtenerPostulacion(this.idUsuario, this.idEmpleo).subscribe({
      next: (data) => {
        this.postulacion = data;
      },
      error: (err) => {
        console.error('Error al obtener los detalles de la postulación', err);
      }
    });
  }

  editarEstadoPostulante(): void {
    if (this.postulacion) {
      const nuevoEstado = !this.postulacion.estado;  
      this.postulanteService.editarEstadoPostulante(this.idUsuario, this.idEmpleo, nuevoEstado)
        .subscribe(
          (respuesta) => {
            console.log('Estado actualizado:', respuesta);
            this.postulacion.estado = nuevoEstado;  
          },
          (error) => { 
            console.error('Error al actualizar el estado', error);
          }
        );
    } else {
      console.error('Postulación no disponible');
    }
  }
}
