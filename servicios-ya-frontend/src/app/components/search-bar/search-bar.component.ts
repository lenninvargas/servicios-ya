import { Component, Input } from '@angular/core';
import { SearchService } from '../../core/services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  standalone: false,

  templateUrl: './search-bar.component.html',
  styles: ``,
})
export class SearchBarComponent {
  @Input() showExtraButton: boolean = false;
  titulo: string = '';

  constructor(private searchService: SearchService) {}

  buscarEmpleo(): void {
    try {
      // Validamos que si es falsy no se haga la petición
      if (!this.titulo.trim()) {
        alert('Debe escribir algo para buscar');
        return;
      }
      
      if (this.titulo.trim()) {
        this.searchService.buscarPorTitulo(this.titulo).subscribe(
          res => {
            console.log('Empleo encontrado:', res);
            //Aqui tendremos que ver que haremos con la respuesta
          },
          error => {
            console.error('Error en la búsqueda', error);
          },
        );
      }
    } catch (error) {
      console.error('Error en la búsqueda', error);
    }
  }
}
