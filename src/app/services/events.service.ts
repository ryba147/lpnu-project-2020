import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../interfaces/event.interface'

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  // private baseUrl = "http://localhost:8080";
  private baseUrl = "https://eventure-lpnu.herokuapp.com";
  
  constructor(private http: HttpClient) { }

  getEventsList(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/events/`);
  }

  // TODO events provider 
  // приймати з беку, якщо не прийнято
  
  // ng query for search




  /*
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }
  */
}
