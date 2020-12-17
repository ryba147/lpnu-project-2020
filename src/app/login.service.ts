import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Observable,Subscription } from 'rxjs';
import { User } from "./interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public user : User|null = null;
  constructor(private http: HttpClient) { }
  public loginEmail(email:string, password:string): Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8080/user/`,{},{params: new HttpParams().set('email', email).set('password', password)});
  }
}
