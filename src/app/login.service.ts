import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }
  public loginEmail(email:string, password:string) : void {
    this.loginMethod(email, password);
  } 

  private loginMethod(email: string, password: string) {
    // new HttpParams().set('email', email).set('password', password);
 
    this.http.post(`https://eventure-lpnu.herokuapp.com/user/`,{},{params: new HttpParams().set('email', email).set('password', password)}).subscribe(data => {
      if (data['user'] !== '') {
        this.router.navigate(['/home']);
      }
      else {
        alert("Wrong user or password");
      }
    });
  }
}
