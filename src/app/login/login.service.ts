import { Injectable } from '@angular/core';
import { urlConst } from '../util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly loginUrl = `${urlConst.baseUrl}${urlConst.appName}${urlConst.users}${urlConst.login}`;

  constructor(private http: HttpClient) { }

  loginUser(login) {
    return this.http.post(this.loginUrl, login);
  }
}
