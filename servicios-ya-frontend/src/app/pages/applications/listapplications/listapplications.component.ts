import { Component, OnInit } from '@angular/core';
import { PostulanteService } from '../../../core/services/applications/postulante.service';
import { TbEmpleo } from '../../../models/tb-empleo';

@Component({
  standalone: false,
  selector: 'app-listapplications',
  templateUrl: './listapplications.component.html',
  styleUrls: ['./listapplications.component.css'],
})
export class ListapplicationsComponent implements OnInit {
  empleos: TbEmpleo[] = [];
  idInput: number | null = null;
  mensaje: string = ''; 

  constructor(private postulanteService: PostulanteService) {}

  ngOnInit(): void {}

  buscarEmpleosPorPostulante() {
    if (this.idInput === null || this.idInput === undefined) {
      console.log('El ID del postulante no es válido.');
      this.mensaje = 'Por favor, ingrese un ID válido.';
      this.empleos = [];
      return;
    }

    console.log('Enviando solicitud al backend con ID:', this.idInput);

    this.postulanteService.listarEmpleosPorPostulante(this.idInput).subscribe(
      (data) => {
        console.log('Datos recibidos del backend:', data);
        if (data.length === 0) {
          this.empleos = [];
        } else {
          this.empleos = data;
          this.mensaje = ''; 
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
        this.empleos = [];
        this.mensaje = 'Psotulante no encontrado.';
      }
    );
  }
}
