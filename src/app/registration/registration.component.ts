import { Component } from '@angular/core';
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

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user: User = new User();
  confPass: string;
  form: FormGroup;

  private stringPattern = '^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$';

  constructor(public fb: FormBuilder, private http:HttpClient, private router:Router, private registration:RegistrationService) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      city: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    }, {validator: this.passwordMatcher });
  }

  get f() { return this.form.controls; }

  private passwordMatcher(group: FormGroup): null | { nomatch: boolean } {
    if (group.get('password') !== null) {
    const pass = group.get('password').value;
    const confirm_pass = group.get('confirm_password').value;
    return pass === confirm_pass
    // return form.controls['password'].value === c.get('confirm_password').value
      ? null
      : { nomatch: true };
    }
  }

  register() {
    this.registration.register(this.user);
  }
}
