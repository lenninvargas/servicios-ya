import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TbEmpleo } from '../../models/tb-empleo';
import { BASE_URL, EMPLEO, FILTER } from '../api-routes';

@Injectable({
  providedIn: 'root',
})
export class EmpleoService {
  constructor(private http: HttpClient) {}

  public listar(): Observable<TbEmpleo[]> {
    return this.http.get<TbEmpleo[]>(BASE_URL + EMPLEO);
  }

  public buscar(id: number): Observable<TbEmpleo> {
    return this.http.get<TbEmpleo>(BASE_URL + EMPLEO + FILTER + `/${id}`);
  }

  public crear(empleo: TbEmpleo): Observable<any> {
    return this.http.post(BASE_URL + EMPLEO, empleo);
  }

  public actualizar(id: number, empleo: TbEmpleo): Observable<any> {
    return this.http.put(BASE_URL + EMPLEO + `/${id}`, empleo);
  }

  public eliminar(id: number): Observable<TbEmpleo> {
    return this.http.delete<any>(BASE_URL + EMPLEO + `/${id}`);
  }
}
