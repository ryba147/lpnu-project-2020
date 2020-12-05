import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:string;
  pwd:string;
  response:any;
  constructor(private http:HttpClient,private router:Router) { }
  
  get loginEmail(){
    return this.userEmails.get('loginEmail')  
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
    this.http.post('http://127.0.0.1:8080/user/'+this.email+'/',{}).subscribe(data =>{
      if(data['user']!=''){
        this.router.navigate(['/home']);
      }
      else{
        this.pwd = '';
        alert('User does not exists!')
      }
    })
    
  }

  ngOnInit(): void {

  }

}
