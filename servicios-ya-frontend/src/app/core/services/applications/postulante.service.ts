import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TbEmpleo } from '../../../models/tb-empleo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  private baseUrl = 'http://localhost:8080/applications';

  constructor(private http: HttpClient) {}

  listarEmpleosPorPostulante(id: number): Observable<TbEmpleo[]> {
    return this.http.get<TbEmpleo[]>(`${this.baseUrl}/postulante/${id}`);
  }

  obtenerPostulacion(idUsuario: number, idEmpleo: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?idUsuario=${idUsuario}&idEmpleo=${idEmpleo}`);
  }

  editarEstadoPostulante(idUsuario: number, idEmpleo: number, nuevoEstado: boolean): Observable<any> {
    const body = { estado: nuevoEstado };  
    return this.http.put<any>(`${this.baseUrl}/${idUsuario}/${idEmpleo}`, body);
  }  
}
