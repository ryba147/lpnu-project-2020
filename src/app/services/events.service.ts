import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../interfaces/event.interface'
import { User } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl = 'http://0.0.0.0:5000/user' /* тимчасово */

  constructor(private http: HttpClient) { }

  getEventsList(): Observable<any> {
    return this.http.get<any[]>("https://eventure-lpnu.herokuapp.com/events/");
  }

  /*
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }
  */
}
