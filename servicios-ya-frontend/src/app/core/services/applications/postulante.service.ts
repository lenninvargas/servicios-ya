import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Empleo } from '../../../models/empleo';

@Injectable({
  providedIn: 'root',
})
export class PostulanteService {
  private baseUrl = 'http://localhost:8080/applications';

  constructor(private http: HttpClient) {}

  listarEmpleosPorPostulante(id: number): Observable<Empleo[]> {
    return this.http.get<Empleo[]>(`${this.baseUrl}/postulante/${id}`);
  }

  obtenerPostulacion(idUsuario: number, idEmpleo: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?idUsuario=${idUsuario}&idEmpleo=${idEmpleo}`);
  }

  editarEstadoPostulante(idUsuario: number, idEmpleo: number, nuevoEstado: boolean): Observable<any> {
    const body = { estado: nuevoEstado };  
    return this.http.put<any>(`${this.baseUrl}/${idUsuario}/${idEmpleo}`, body);
  }  
}
