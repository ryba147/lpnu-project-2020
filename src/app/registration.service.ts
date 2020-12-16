import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient, private router: Router) { }
  public register(user:User) : void {
    this.registerMethod(user);
  } 

  private registerMethod(user:User):void {
    console.log(user);
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    this.http.post('https://eventure-lpnu.herokuapp.com/user/',JSON.stringify(user),{headers:headers}).subscribe(data =>{
      console.log(data);
      if(data['status']!=='Failed to create user'){
        this.router.navigate(['/home']);
      }
      else{
        alert('Cannot create user!');
        user.email = '';
        user.password = '';
      }
    })
  }                                
}
