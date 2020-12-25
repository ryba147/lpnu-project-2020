import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient, private router: Router) {}
  public register(user: User): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    console.log(JSON.stringify(user));
    return this.http.post('http://0.0.0.0:5000/users/', JSON.stringify(user), {
      headers: headers,
    });
  }
}
