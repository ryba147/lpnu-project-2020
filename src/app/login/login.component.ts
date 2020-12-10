import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;
  response: any;
  constructor(private http: HttpClient, private router: Router, private login: LoginService) {}

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

  enter() {
    this.login.loginEmail(this.email,this.pwd);
  }

  ngOnInit(): void {}
}
