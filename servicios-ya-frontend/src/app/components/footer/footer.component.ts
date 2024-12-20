import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  footerText = '@2024 ServiciosYa! - Portal de trabajo';
}
