import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { Observable, Subscription } from "rxjs";
import { UserProvider } from './user.provider';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient, private router: Router) { }

    public createUser(user: User): Observable<Object> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post('http://127.0.0.1:8080/users/', JSON.stringify(user), { headers: headers });
  }
}
