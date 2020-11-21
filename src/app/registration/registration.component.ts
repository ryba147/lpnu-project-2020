import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

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
  form: FormGroup;
  constructor(public fb: FormBuilder) {
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
}
