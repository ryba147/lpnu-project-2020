import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient, private router: Router) { }
    private baseUrl = 'https://eventure-lpnu.herokuapp.com';
    public createUser(user: User): Observable<Object> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(`${this.baseUrl}/users/`, JSON.stringify(user), { headers: headers });
  }
}
