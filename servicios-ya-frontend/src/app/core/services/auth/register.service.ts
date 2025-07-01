import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../../../models/RegisterModel';
import { AUTH, SECURITY_URL, REGISTER, REGISTER_EMPLEADOR } from '../../api-routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  // Método para Empleado
  public registerEmpleado(dto: RegisterModel): Observable<any> {
    const url = `${SECURITY_URL}${AUTH}${REGISTER}`;
    return this.http.post<any>(url, dto);
  }

  // Método para Empleador
  public registerEmpleador(dto: RegisterModel): Observable<any> {
    const url = `${SECURITY_URL}${AUTH}${REGISTER_EMPLEADOR}`;
    return this.http.post<any>(url, dto);
  }
}
