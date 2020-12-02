import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../user';
import { from } from 'rxjs';
import { Router } from '@angular/router';

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
  constructor(public fb: FormBuilder,private http:HttpClient,private router:Router) {
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
    console.log(this.user);
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    this.http.post('http://127.0.0.1:8080/user/',JSON.stringify(this.user),{headers:headers}).subscribe(data =>{
      console.log(data);
      if(data['status']!='Failed to create user'){
        this.router.navigate(['/home']);
      }
      else{
        alert('Cannot create user!');
        this.user.email = '';
        this.user.password = '';

      }

    })
  }
}
