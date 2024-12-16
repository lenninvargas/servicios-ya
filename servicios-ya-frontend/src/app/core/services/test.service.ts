import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTES } from '../api-routes';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  // Esta es la estructura a seguir para crear un servicio que se conecte a un endpoint de la API.

  // public test(): Observable<TIPO_DATO> {
  //   const data = this.http.get(API_ROUTES.BASE_URL + API_ROUTES.TEST);
  // }
}
