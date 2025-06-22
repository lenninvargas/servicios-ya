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
  public register(register: RegisterModel): Observable<any> {
    return this.http.post<any>(SECURITY_URL + AUTH + REGISTER, register);
  }
}
