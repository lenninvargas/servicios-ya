import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostulanteService } from '../../../core/services/applications/postulante.service';

@Component({
  selector: 'app-crear-postulacion',
  templateUrl: './crear-postulacion.component.html',
  standalone: false
})
export class CrearPostulacionComponent implements OnInit {
  idUsuario!: number;
  idEmpleo!: number;
  postulacion: any = {
    id: {},
    estado: false,
    precioPropuesta: null,
    fecha: new Date(),
  };
  mensaje = '';

  constructor(
    private route: ActivatedRoute,
    private postulanteService: PostulanteService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.idUsuario = +this.route.snapshot.paramMap.get('idUsuario')!;
    this.idEmpleo = +this.route.snapshot.paramMap.get('idEmpleo')!;

    this.postulacion.id = {
      idUsuario: this.idUsuario,
      idEmpleo: this.idEmpleo,
    };
    this.postulacion.idUsuario = { id: this.idUsuario };
    this.postulacion.idEmpleo = { id: this.idEmpleo };
  }

  postular(): void {
    this.postulanteService.crearPostulacion(this.postulacion).subscribe({
      next: () => {
        this.mensaje = 'Postulación registrada con éxito';
        this.router.navigate(['/postulante']);
      },
      error: err => {
        console.error('Error al postular:', err);
        this.mensaje = 'Error al postular. Puede que ya hayas postulado.';
      },
    });
  }
}
