import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http:HttpClient,private router:Router) { }
  public loginEmail(email,password){
    return this.loginMethod(email,password);
  }

  private loginMethod(email: string,password:string) {
    this.http.post(`https://eventure-lpnu.herokuapp.com/user/?email=${email}&password=${password}`,{}).subscribe(data => {
      if (data['user'] != '') {
        this.router.navigate(['/home']);
      }
      else {
        alert("NO");
      }
    });
  }
}
