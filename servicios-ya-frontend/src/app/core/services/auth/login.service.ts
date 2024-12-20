import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../../../models/LoginModel';
import { AUTH, BASE_URL, LOGIN } from '../../api-routes';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(login: LoginModel): Observable<any> {
    return this.http.post<any>(BASE_URL + AUTH + LOGIN, login);
  }
}
