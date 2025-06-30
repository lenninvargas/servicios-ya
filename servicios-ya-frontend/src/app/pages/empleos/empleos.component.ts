import { Component, OnInit } from '@angular/core';

import { TbEmpleo } from '../../models/tb-empleo';
import { EmpleoService } from '../../core/services/empleo.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../core/services/search-bar.service';
import { fromUrlString } from '../../helpers/convertDashes.helper';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css'],
  standalone: false,
})
export class EmpleosComponent implements OnInit {
  empleos: TbEmpleo[] = [];

  constructor(
    private empleoService: EmpleoService,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['search'];
      if (query) {
        const search = fromUrlString(query);
        // Buscar por título usando el servicio
        this.searchService.buscarPorTitulo(search).subscribe({
          next: data => {
            console.log('Empleos filtrados:', data);
            this.empleos = Array.isArray(data) ? data : [data];
          },
          error: err => {
            console.error('Error al buscar empleos:', err);
          },
        });
      } else {
        // Listar todos si no hay búsqueda
        this.empleoService.listar().subscribe({
          next: data => {
            console.log('Empleos cargados:', data);
            this.empleos = data;
          },
          error: err => {
            console.error('Error al cargar empleos:', err);
          },
        });
      }
    });
  }
}
