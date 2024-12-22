import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';  
import { PostulanteService } from '../../../../core/services/applications/postulante.service';

@Component({
  selector: 'app-detailsapplications',
  standalone: false,
  
  templateUrl: './detailsapplications.component.html',
  styleUrl: './detailsapplications.component.css'
})
export class DetailsapplicationsComponent implements OnInit{
  idUsuario!: number;
  idEmpleo!: number;
  postulacion: any;  

  constructor(
    private route: ActivatedRoute,
    private postulanteService: PostulanteService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.idUsuario = +this.route.snapshot.paramMap.get('idUsuario')!;
    this.idEmpleo = +this.route.snapshot.paramMap.get('idEmpleo')!;

    this.obtenerDetallesPostulacion();
  }

  obtenerDetallesPostulacion(): void {
    this.postulanteService.obtenerPostulacion(this.idUsuario, this.idEmpleo).subscribe({
      next: (data) => {
        this.postulacion = data;
      },
      error: (err) => {
        console.error('Error al obtener los detalles de la postulación', err);
      }
    });
  }

  volver(): void {
    this.location.back();  
  }
}
