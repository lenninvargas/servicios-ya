import { Component, OnInit } from '@angular/core';

import { TbEmpleo } from '../../models/tb-empleo';
import { EmpleoService } from '../../core/services/empleo.service';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css'],
  standalone: false,
})
export class EmpleosComponent implements OnInit {
  empleos: TbEmpleo[] = [];

  constructor(private empleoService: EmpleoService) {}

  ngOnInit(): void {
    this.empleoService.listar().subscribe({
      next: data => {
        this.empleos = data;
        console.log('Empleos cargados:', data);
      },
      error: err => {
        console.error('Error al cargar empleos:', err);
      },
    });
  }
}
