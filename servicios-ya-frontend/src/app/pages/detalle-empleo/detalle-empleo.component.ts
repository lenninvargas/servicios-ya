import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleoService } from '../../core/services/empleo.service';

@Component({
  selector: 'app-detalle-empleo',
  standalone: false,

  templateUrl: './detalle-empleo.component.html',
  styleUrl: './detalle-empleo.component.css',
})
export class DetalleEmpleoComponent implements OnInit {
  empleo: any = {};

  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private empleoService: EmpleoService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.empleoService.buscar(Number(id)).subscribe(data => {
      this.empleo = data;
      this.usuario = JSON.parse(sessionStorage.getItem('usuario')!);
    });
  }
}
