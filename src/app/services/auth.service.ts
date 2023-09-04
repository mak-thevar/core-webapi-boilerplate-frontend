import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequest } from '../models/user-request';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseEndPoint:string = environment.baseEndPoint;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient,public router: Router) { }


  login(loginRequest: LoginRequest){
    return this.http.post<any>(`${this.baseEndPoint}/Auth`, loginRequest)
    .pipe(catchError(err=>throwError(()=> err)));
  }
  getToken() {
    return localStorage.getItem('accessToken');
  }

  registerUser(user: UserRequest):Observable<any> {
    return this.http.post(`${this.baseEndPoint}/Users`,user)
    .pipe();
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return authToken !== null ? true : false;
  }
  

}
