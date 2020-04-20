import { JwtRequest } from './../models/auth.model';

import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  apiUrl = environment.apiUrl;
  loginUrl = environment.loginUrl;
  constructor(private http: HttpClient) {}

  login(user:JwtRequest): Observable<boolean> {
    return this.http.post<any>(`${this.loginUrl}`, user).pipe(
      tap(tokens => this.doLoginUser(user, tokens)),
      mapTo(true),
      catchError(error => {
         return of(false);
      }));
    }

    logout(){
      this.doLogoutUser();
    }

    isLoggedIn() {
      return !!this.getJwtToken();
    }

    getJwtToken() {
      return localStorage.getItem(this.JWT_TOKEN);
    }

    private doLogoutUser() {
      this.loggedUser = null;
      this.removeToken();
  
    }
    private doLoginUser(user: JwtRequest, tokens: string) {
      this.loggedUser = user.username;
      this.storeToken(tokens["token"]);
    }
  
    private storeToken(token: string) {
      localStorage.setItem(this.JWT_TOKEN,token);
    }
  
    private removeToken() {
      localStorage.removeItem(this.JWT_TOKEN);
 
    }
    private storeJwtToken(jwt: string) {
      localStorage.setItem(this.JWT_TOKEN, jwt);
    }
  }
