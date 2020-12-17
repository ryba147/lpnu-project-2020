import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service'
import {from, Observable} from 'rxjs';
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../login.service";
function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirm_password').value
    ? null
    : { nomatch: true };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  confPass:string;
  form: FormGroup;
  response: Observable<any>;
  responseData: any;
  responseStatus: string|null = " ";
  constructor(public fb: FormBuilder, private http:HttpClient, private router:Router, private registration:RegistrationService, private login:LoginService) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$')]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$')]],
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      ],
      pword: this.fb.group({
          password: ['', Validators.required], //
          confirm_password: ['', Validators.required],
        }, { validator: passwordMatcher }),
    });
  }
  get f() { return this.form.controls; }
  ngOnInit(): void {}
  register(){
    this.response =  this.registration.register(this.user);
    this.response.subscribe(data =>
      this.responseData = data
    );
    if(this.responseData!==undefined){
      this.login.user = this.responseData['user'];
      this.responseStatus = this.responseStatus['status'];}
    else{
      this.responseStatus = 'email is not unique';
    }
    if(this.responseStatus === 'registered'){
      this.router.navigate(['/home']);
    }
  }
}
