import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'
import {User} from '../interfaces/user.interface';
import {UserProvider} from '../services/user.provider';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  pwd: string;
  response: number;
  loading = false;
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService, private userProvider: UserProvider) {}


  get loginEmail(): AbstractControl{
    return this.userEmails.get('loginEmail');
  }

  get loginPassword(): AbstractControl{
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

  userLogin(): void {
    this.loading = true;
    this.loginService.login(this.email.toLowerCase(), this.pwd)
      .subscribe((resp: {user: User, status: string}) => {
        this.userProvider.setUser(resp.user);
        this.router.navigate(['/my-profile']);
        this.loading = false;
      }, (error) => {
        this.response = error.status;
        this.loading = false;
      });
  }

}
