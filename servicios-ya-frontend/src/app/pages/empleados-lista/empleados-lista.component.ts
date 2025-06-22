import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../core/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-lista',
  standalone: false,
  
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.css'
})

export class EmpleadosListaComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = []; 
  usuariosPaginados: any[] = [];

  paginaActual: number = 1;
  usuariosPorPagina: number = 9;

  filtro: string = ''; 

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listar().subscribe((data) => {
      this.usuarios = data;
      this.usuariosFiltrados = data; 
      this.actualizarUsuariosPaginados();
    });
  }

  buscarPorHabilidad() {
    const termino = this.filtro.toLowerCase().trim();

    this.usuariosFiltrados = this.usuarios.filter(usuario =>
      usuario.habilidades.some((h: any) =>
        h.nombre.toLowerCase().includes(termino)
      )
    );

    this.paginaActual = 1; // reinicia a página 1
    this.actualizarUsuariosPaginados();
  }

  paginas(): number[] {
    const totalPaginas = Math.ceil(this.usuariosFiltrados.length / this.usuariosPorPagina);
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
    this.actualizarUsuariosPaginados();
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarUsuariosPaginados();
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.paginas().length) {
      this.paginaActual++;
      this.actualizarUsuariosPaginados();
    }
  }

  actualizarUsuariosPaginados() {
    const inicio = (this.paginaActual - 1) * this.usuariosPorPagina;
    const fin = inicio + this.usuariosPorPagina;
    this.usuariosPaginados = this.usuariosFiltrados.slice(inicio, fin);
  }
}
