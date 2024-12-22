import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleo } from '../../models/empleo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleoService {

  private baseUrl = "http://localhost:8080/empleo"

  constructor(private http: HttpClient) { }

  public actualizar(id: number, empleo: Empleo): Observable<any> {
    return this.http.put(this.baseUrl + `/${id}`, empleo);
 }

  public buscar(id: number): Observable<Empleo> {
    return this.http.get<Empleo>(this.baseUrl + "/filter" + `/${id}`);
  }

  public eliminar(id: number): Observable<Empleo> {
    return this.http.delete<any>(this.baseUrl + `/${id}`);
  }
}
