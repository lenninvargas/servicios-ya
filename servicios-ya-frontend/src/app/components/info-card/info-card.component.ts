import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: false,

  templateUrl: './info-card.component.html',
  styles: ``,
})
export class InfoCardComponent {
  @Input() imageSrc!: string;
  @Input() count!: number;
  @Input() description!: string;
}
