import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../../../models/LoginModel';
import { AUTH, SECURITY_URL, LOGIN } from '../../api-routes';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(login: LoginModel): Observable<HttpResponse<any>> {
    return this.http.post<any>(SECURITY_URL + AUTH + LOGIN, login, {
      observe: 'response',
    });
  }
}
