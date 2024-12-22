import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, PAIS } from '../api-routes';
import { Pais } from '../../models/Pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}
  public listar(): Observable<Pais[]> {
    return this.http.get<Pais[]>(BASE_URL + PAIS);
  }
}
