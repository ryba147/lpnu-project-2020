import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'
import {User} from "../interfaces/user.interface";
import {UserProvider} from "../services/user.provider";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;
  response: number = 200;
  constructor(private http: HttpClient, private router: Router, private login: LoginService, private userProvider:UserProvider) {}

  get loginEmail() {
    return this.userEmails.get('loginEmail');
  }

  get loginPassword() {
    return this.userEmails.get('loginPassword');
  }

  userEmails = new FormGroup({
    loginEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    loginPassword: new FormControl('', [
      Validators.required
    ]),
  });

  async enter() {
    await this.login.loginEmail(this.email,this.pwd).
    subscribe(data=>{
      console.log(data);
      this.saveUser(data['user']);
      this.response = 200;
      this.router.navigate(['/home']);
    },error => {this.response = error.code;})
  }

  private saveUser(user:User){
    this.userProvider.setUser(user);
  }
  ngOnInit(): void {}
}
