import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserpageService {

  constructor(private http: HttpClient) { }

  public updateUser(newUser: User): Observable<object>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.put('https://eventure-lpnu.herokuapp.com/users/', JSON.stringify(newUser), {headers : headers });
  }
}

