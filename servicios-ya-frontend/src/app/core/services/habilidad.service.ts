import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../../models/Habilidad';
import { BASE_URL, HABILIDAD } from '../api-routes';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  constructor(private http: HttpClient) {}

  public listar(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(BASE_URL + HABILIDAD);
  }
}
