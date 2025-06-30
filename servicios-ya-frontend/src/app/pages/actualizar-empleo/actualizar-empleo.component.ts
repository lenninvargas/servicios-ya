import { Component } from '@angular/core';
import { EmpleoService } from '../../core/services/empleo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadService } from '../../core/services/habilidad.service';
import { Habilidad } from '../../models/Habilidad';
import { TbEmpleo } from '../../models/tb-empleo';

@Component({
  selector: 'app-actualizar-empleo',
  standalone: false,
  templateUrl: './actualizar-empleo.component.html',
  styleUrl: './actualizar-empleo.component.css',
})
export class ActualizarEmpleoComponent {
  modo: 'crear' | 'editar' = 'crear';
  usuarioId?: number;
  habilidades: Habilidad[] = [];
  empleo!: TbEmpleo;

  constructor(
    private empleoService: EmpleoService,
    private habilidadService: HabilidadService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    let usuarioGuardado: string | null = null;

    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      usuarioGuardado = sessionStorage.getItem('usuario');
    }

    const usuarioParseado = usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : null;
    this.usuarioId = usuarioParseado?.id ?? undefined;

    this.empleo = {
      id: 0,
      titulo: '',
      descripcion: '',
      fechaPublicada: '',
      presupuesto: 0,
      usuario: {
        id: this.usuarioId,
        nombre: '',
        apellidoPat: '',
        apellidoMat: '',
        fechaNac: '',
        dni: '',
        pais: { id: 0, nombre: '' },
        email: '',
        password: '',
        tipoUsuario: '',
      },
      habilidad: {
        id: 0,
        nombre: '',
      },
    };

    this.habilidadService.listar().subscribe(data => {
      this.habilidades = data;
    });

    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam && idParam !== 'crear' && !isNaN(Number(idParam))) {
      this.modo = 'editar';
      const id = Number(idParam);

      this.empleoService.buscar(id).subscribe({
        next: response => {
          this.empleo = response;
        },
        error: err => {
          console.error('Error al buscar empleo:', err);
        },
      });
    } else {
      console.warn('ID inválido o modo creación detectado:', idParam);
    }
  }

  onSubmit() {
    if (this.modo === 'crear') {
      this.empleo.fechaPublicada = new Date().toISOString();

      this.empleoService.crear(this.empleo).subscribe({
        next: data => {
          this.router.navigate(['/empleos']);
          console.log(data);
        },
        error: err => {
          console.error('Error al crear empleo:', err);
          console.log(this.empleo);
        },
      });
    } else {
      console.log('Actualizando empleo:', this.empleo);

      if (this.empleo.id !== undefined) {
        this.empleoService.actualizar(this.empleo.id, this.empleo).subscribe({
          next: () => {
            this.router.navigate(['/empleos']);
          },
          error: err => {
            console.error('Error al actualizar el empleo:', err);
          },
        });
      }
    }
  }
}
