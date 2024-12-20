import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styles: [
    `
      .px-300 {
        padding-left: 300px;
        padding-right: 300px;
      }
    `,
  ],
})
export class NavbarComponent {}
