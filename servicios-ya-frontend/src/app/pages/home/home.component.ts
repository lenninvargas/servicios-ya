import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  FAKE_DATA = [
    {
      imageSrc: 'icons/new-jobs.svg',
      count: 30,
      description: 'Empleos disponibles',
    },
    {
      imageSrc: 'icons/candidate.svg',
      count: 100,
      description: 'Empleos disponibles',
    },
    { imageSrc: 'icons/employer.svg', count: 50, description: 'Empleadores' },
    
    {
      imageSrc: 'icons/new-jobs.svg',
      count: 30,
      description: 'Nuevos empleos',
    },
  ];
}
