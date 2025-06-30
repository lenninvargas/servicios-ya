import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { toUrlString } from '../../helpers/convertDashes.helper';

@Component({
  selector: 'app-search-bar',
  standalone: false,

  templateUrl: './search-bar.component.html',
  styles: ``,
})
export class SearchBarComponent {
  @Input() showExtraButton: boolean = false;
  titulo: string = '';

  constructor(private router: Router) {}

  buscarEmpleo(): void {
    const query = toUrlString(this.titulo);
    if (!query) {
      alert('Debe escribir algo para buscar');
      return;
    }
    this.router.navigate(['/empleos'], { queryParams: { search: query } });
  }
}
