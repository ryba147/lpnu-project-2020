import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { LoginService } from '../services/login.service';
import { UserProvider } from '../services/user.provider';
import { CityProvider } from '../services/city.provider';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user: User = new User();
  confPass: string;
  form: FormGroup;
  response: number;
  selectedCities: Array<string> = [];
  autoCompleteActive = 0;
  autoCompleteChosen = 0;
  loading = 0;
  private stringPattern = '^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$';

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private registrationService: RegistrationService,
    private loginService: LoginService,
    private userProvider: UserProvider,
    private cityProvider: CityProvider
  ) {
    this.createForm();
    this.user.sex = 'not_specified';
    this.user.family_status = 'single';
    this.user.organizer = false;
  }

  get f() {
    return this.form.controls;
  }

  public updateSelectedCities(): void {
    if (
      this.cityProvider.compareWithSelectedCity(this.user.city) === true &&
      this.autoCompleteChosen === 1
    ) {
      return;
    }
    this.autoCompleteChosen = 0;
    this.selectedCities = [];
    if (this.user.city.length >= 3) {
      const cities = this.cityProvider.getCityList();
      for (const city of cities) {
        if (
          city.substr(0, this.user.city.length).toLowerCase() ===
          this.user.city.toLowerCase()
        ) {
          this.selectedCities.push(city);
        }
      }
    }
  }

  private createForm(): void {
    this.form = this.fb.group(
      {
        firstname: [
          '',
          [Validators.required, Validators.pattern(this.stringPattern)],
        ],
        lastname: [
          '',
          [Validators.required, Validators.pattern(this.stringPattern)],
        ],
        city: [
          '',
          [Validators.required, Validators.pattern(this.stringPattern)],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9A-Z._%+-]+@[a-zA-Z.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ],
        ],
        confirm_password: ['', [Validators.required, Validators.minLength(8)]],
        date: [''],
        pets: [''],
        sex: [''],
        family_status: [''],
      },
      { validator: this.passwordMatcher }
    );
  }

  private passwordMatcher(group: FormGroup): null | { nomatch: boolean } {
    if (group.get('password') !== null) {
      const pass = group.get('password').value;
      const confirm_pass = group.get('confirm_password').value;
      return pass === confirm_pass ? null : { nomatch: true };
    }
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }
    this.loading = 1;
    this.user.email = this.user.email.toLowerCase();
    this.registrationService.createUser(this.user).subscribe(
      (data) => {
        this.loading = 0;
        this.userProvider.setUser(data['user']);
        this.response = 201;
        this.router.navigate(['/home']);
      },
      (error) => {
        this.loading = 0;
        this.response = error.status;
      }
    );
  }

  // tslint:disable-next-line:typedef
  show() {
    alert(this.autoCompleteChosen);
  }

  setCity(city): void {
    if (this.cityProvider.setSelectedCity(city) === true) {
      this.autoCompleteChosen = 1;
      this.user.city = city;
      this.autoCompleteActive = 0;
    }
  }
}
