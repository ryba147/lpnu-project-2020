import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProvider } from './user.provider';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient, private user: UserProvider) { }
  private baseUrl = 'https://eventure-lpnu.herokuapp.com';
  public login(email: string, password: string): Observable<object> {
    return this.http.post<any>(`${this.baseUrl}/users/`, {},
      {params: new HttpParams().set('email', email).set('password', password)});
  }

}
