import { Component, input, OnInit } from '@angular/core';
import { TbEmpleo } from '../../../../models/tb-empleo';
import { PostulanteService } from '../../../../core/services/applications/postulante.service';
@Component({
  standalone: false,
  selector: 'app-listapplications',
  templateUrl: './listapplications.component.html',
  styleUrls: ['./listapplications.component.css'],
})
export class ListapplicationsComponent implements OnInit {
  empleos: TbEmpleo[] = [];  
  idInput: number | null = null;
  mensaje: string= '';

  constructor(private postulanteService: PostulanteService) {}

  ngOnInit(): void {}

  buscarEmpleosPorPostulante() {
    if (this.idInput === null) {
      console.log('El ID del postulante no es válido.');
      return;
    }

    this.postulanteService.listarEmpleosPorPostulante(this.idInput).subscribe(
      (data) => {
        console.log('Datos de los empleos postulados:', data);
        this.empleos = data;  
        this.mensaje = '';
      },
      (error) => {
        this.empleos = [];
        this.mensaje='Postulante de ID ' + this.idInput + ' no encotrado';
      }
    );
  }
}
