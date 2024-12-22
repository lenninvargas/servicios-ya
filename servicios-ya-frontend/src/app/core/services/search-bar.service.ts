import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../api-routes';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl = BASE_URL;

  constructor(private http: HttpClient) {}

  buscarPorTitulo(titulo: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/empleo/search`, { titulo });
  }
}
