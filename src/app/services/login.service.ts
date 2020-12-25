import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Observable, Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserProvider } from './user.provider';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private user: UserProvider) {}

  public loginEmail(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `http://0.0.0.0:5000/users/`,
      {},
      { params: new HttpParams().set('email', email).set('password', password) }
    );
  }
}
