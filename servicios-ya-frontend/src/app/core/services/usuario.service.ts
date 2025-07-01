import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { AUTH, BASE_URL } from '../api-routes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 constructor(private http: HttpClient) {}
   public listar(): Observable<Usuario[]> {
     return this.http.get<Usuario[]>(BASE_URL + AUTH + '/usuarios');
   }
}
