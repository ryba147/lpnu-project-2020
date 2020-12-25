import { Component } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { UserProvider } from '../services/user.provider';
import {dashCaseToCamelCase} from "@angular/compiler/src/util";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user: User;
  confPass: string;
  form: FormGroup;
  response: number;

  private stringPattern = '^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$';

  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router,
    private registrationService: RegistrationService, private loginService: LoginService, private userProvider: UserProvider) {
      this.createForm();
  }

  get f() { return this.form.controls; }

  private createForm(): void {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      city: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    }, {validator: this.passwordMatcher });
  }

  private passwordMatcher(group: FormGroup): null | { nomatch: boolean } {
    if (group.get('password') !== null) {
    const pass = group.get('password').value;
    const confirm_pass = group.get('confirm_password').value;
    return pass === confirm_pass
      ? null
      : { nomatch: true };
    }
  }

  register() {
    this.registrationService.createUser(this.user).
    subscribe(data=>{
        this.response = 201;
        this.router.navigate(['/home']);
      },
      error => {
          alert(error.code);
          this.response = error.code;
      }
    );
  }
}
