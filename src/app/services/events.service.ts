import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponsePage } from '../interfaces/response-page.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  // private baseUrl = 'http://localhost:8080';
  private baseUrl = "https://eventure-lpnu.herokuapp.com";

  constructor(private http: HttpClient) {}

  public getEventsList(): Observable<ResponsePage> {
    return this.http.get<ResponsePage>(`${this.baseUrl}/events/`);
  }

  public getPage(page_num: number): Observable<ResponsePage> {
    return this.http.get<ResponsePage>(`${this.baseUrl}/events/?show=4`, {
      params: new HttpParams().set('page', `${page_num}`),
    });
  }

  /*
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }
  */
}
