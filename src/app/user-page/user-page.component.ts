import { Component, OnInit } from '@angular/core';
import { UserProvider } from '../services/user.provider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityProvider } from '../services/ city.provider';
import { UserpageService } from '../services/userpage.service';
import { EventsService } from '../services/events.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  // 0 - recent, 1 - user pages, 2 - settings
  //Переробити під булеан
  status = 0;
  loading: boolean;
  //Перекинути в конструкторі
  currentUser: User;
  eventList: Array<Event>;
  //Забрати
  updatedUser: User;
  autoCompleteChosen: boolean;
  selectedCities: Array<string>;
  autoCompleteActive: boolean;
  form: FormGroup;
  oldPass: string;
  newPass: string;
  confPass: string;
  private stringPattern = '^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$';
  url: any;
  constructor(
    public fb: FormBuilder,
    private userProvider: UserProvider,
    private cityProvider: CityProvider,
    private userPageService: UserpageService,
    private eventsService: EventsService
  ) {
    this.currentUser = this.userProvider.getUser();
    this.eventList = [];
    this.selectedCities = [];
  }

  ngOnInit(): void {
    this.changePanel(0);
  }

  get f() {
    return this.form.controls;
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public updateSelectedCities(): void {
    this.autoCompleteActive = true;
    this.updatedUser.city = this.updatedUser.city.trimLeft();
    if (
      this.cityProvider.compareWithSelectedCity(this.updatedUser.city) ===
        true &&
      this.autoCompleteChosen === true
    ) {
      return;
    }
    this.autoCompleteChosen = false;
    this.selectedCities = [];
    if (this.updatedUser.city.length >= 3) {
      const cities = this.cityProvider.getCityList();
      for (const city of cities) {
        if (
          city.substr(0, this.updatedUser.city.length).toLowerCase() ===
          this.updatedUser.city.toLowerCase()
        ) {
          this.selectedCities.push(city);
        }
      }
    }
  }

  private createForm(): void {
    this.updatedUser = this.userProvider.getUser();
    this.oldPass = '';
    this.confPass = '';
    this.newPass = '';
    this.form = this.fb.group({
      profile_photo: [''],
      firstname: [
        '',
        [Validators.required, Validators.pattern(this.stringPattern)],
      ],
      lastname: [
        '',
        [Validators.required, Validators.pattern(this.stringPattern)],
      ],
      city: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      old_password: [''],
      new_password: [''],
      confirm_password: [''],
      date: [''],
      pets: [''],
      sex: [''],
      family_status: [''],
    });
  }

  passwordMatcher(): boolean {
    if (this.oldPass === '' && this.newPass === '' && this.confPass === '') {
      return true;
    }
    if (
      this.oldPass === this.currentUser.password &&
      this.newPass === this.confPass &&
      this.confPass.length >= 8 &&
      this.confPass.length <= 12
    ) {
      return true;
    }
    return false;
  }

  setCity(city): void {
    if (this.cityProvider.setSelectedCity(city) === true) {
      this.autoCompleteChosen = true;
      this.updatedUser.city = city;
      this.autoCompleteActive = false;
    }
  }

  changePanel(param): void {
    // alert(document.getElementById('accordeonItem1'));
    for (let i = 0; i <= 2; i++) {
      document.getElementById('accordeonItem' + i.toString()).style.color =
        '#aaaaaa';
    }
    document.getElementById('accordeonItem' + param.toString()).style.color =
      '#000000';
    if (param === 0 || param === 1) {
      this.updateEventList(param);
    } else {
      this.createForm();
    }
    this.status = param;
  }

  updateEventList(mode): void {
    if (mode === 1) {
      this.eventsService.getEventsList().subscribe(
        (data) => {
          this.eventList = data['results'];
        },
        () => {}
      );
    } else {
      this.eventsService.getEventsList().subscribe(
        (data) => {
          this.eventList = data['results'];
        },
        () => {}
      );
    }
  }

  updateUser(): void {
    this.loading = true;
    if (this.newPass.length > 0 && this.passwordMatcher() === true) {
      this.updatedUser.password = this.newPass;
    }
    this.userPageService.updateUser(this.updatedUser).subscribe(
      () => {
        this.loading = false;
        this.userProvider.setUser(this.updatedUser);
        this.currentUser = this.userProvider.getUser();
      },
      () => {
        this.loading = false;
      }
    );
  }

  userButtonClick(): void {
    document.getElementById('profile_photo').click();
  }

  resetUser(): void {
    this.updatedUser = this.userProvider.getUser();
  }

  calculateDuration(event): string {
    const beginEvent = new Date(event.event_datetime_begin);
    const endEvent = new Date(event.event_datetime_end);
    const diff_in_hours = Math.ceil(
      (endEvent.getTime() - beginEvent.getTime()) / 3600000
    ); // milliseconds in one minute
    const diff_in_mins = diff_in_hours * 60;
    const diff_in_days = Math.ceil(diff_in_hours / 24);
    const diff_in_month = Math.ceil(diff_in_hours / 30);
    const diff_in_years = Math.ceil(diff_in_hours / 365);
    if (diff_in_mins < 1) {
      return '<1 min';
    } else if (diff_in_mins < 60) {
      return diff_in_mins + ' mins';
    } else if (diff_in_hours < 24) {
      return diff_in_hours + ' hrs';
    } else if (diff_in_days < 30) {
      return diff_in_days + ' days';
    } else if (diff_in_month > 30) {
      return diff_in_month + ' month';
    } else {
      return diff_in_years + ' years';
    }
  }

  calculateBeginEnd(event): string {
    const beginEvent = new Date(event.event_datetime_begin);
    const endEvent = new Date(event.event_datetime_end);
    if (
      beginEvent.getDay() === endEvent.getDay() &&
      beginEvent.getMonth() === endEvent.getMonth() &&
      beginEvent.getFullYear() === endEvent.getFullYear()
    ) {
      return (
        beginEvent.toUTCString().substring(0, 22) +
        ' - ' +
        endEvent.toTimeString().substring(0, 5)
      );
    } else {
      return (
        beginEvent.toUTCString().substring(0, 22) +
        ' - ' +
        endEvent.toUTCString().substring(0, 22)
      );
    }
  }

  pause(): void {
    alert(1);
  }
}
