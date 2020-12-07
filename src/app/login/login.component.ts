import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';
import { templateJitUrl } from '@angular/compiler';
import { LoginService } from '../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:string;
  pwd:string;
  response:any;
  constructor(private http:HttpClient,private router:Router,private loginService:LoginService) { }
  
  get loginEmail(){
    return this.userEmails.get('loginEmail');
  }

  userEmails = new FormGroup({
    loginEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    secondaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  enter(){
    this.loginService.loginEmail(this.email,this.pwd);
  }

  ngOnInit(): void {

  }

}
