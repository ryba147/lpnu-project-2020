import { Component, OnInit } from '@angular/core';
import {UserProvider} from '../services/user.provider';
import {passBoolean} from 'protractor/built/util';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CityProvider} from '../services/ city.provider';
import {UserpageService} from '../services/userpage.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  // 0 - recent, 1 - user pages, 2 - settings
  status = 0;
  loading = 0;
  currentUser = this.userProvider.getUser();
  eventList = [];
  updatedUser = JSON.parse(JSON.stringify(this.currentUser));
  autoCompleteChosen = 0;
  selectedCities = [];
  autoCompleteActive = 0;
  form: FormGroup;
  response = 0;
  oldPass: string;
  confPass: string;
  edit = 0;
  private stringPattern = '^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$';

  constructor(public fb: FormBuilder, private userProvider: UserProvider, private cityProvider: CityProvider, private userPageService: UserpageService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.currentUser = this.userProvider.getUser();
    this.changePanel(0);
  }

  get f() { return this.form.controls; }

  public updateSelectedCities(): void{
    if (this.cityProvider.compareWithSelectedCity(this.updatedUser.city) === true && this.autoCompleteChosen === 1) {return;}
    this.autoCompleteChosen = 0;
    this.selectedCities = [];
    if (this.updatedUser.city.length >= 3){
      const cities = this.cityProvider.getCityList();
      for (const city of cities){
        if (city.substr(0, this.updatedUser.city.length).toLowerCase() === this.updatedUser.city.toLowerCase()){
          this.selectedCities.push(city);
        }
      }
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      firstname: [this.updatedUser.first_name, [Validators.required, Validators.pattern(this.stringPattern)]],
      lastname: [this.updatedUser.last_name, [Validators.required, Validators.pattern(this.stringPattern)]],
      city: [this.updatedUser.city, [Validators.required, Validators.pattern(this.stringPattern)]],
      old_password: ['', [Validators.required, Validators.pattern('^[a-z0-9A-Z._%+-]+@[a-zA-Z.-]+\\.[a-z]{2,4}$')]],
      new_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      date: [this.updatedUser.birth_date],
      pets: [this.updatedUser.pets],
      sex: [this.updatedUser.sex],
      family_status: [this.updatedUser.family_status]
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

  setCity(city): void {
    if (this.cityProvider.setSelectedCity(city) === true){
      this.autoCompleteChosen = 1;
      this.updatedUser.city = city;
      this.autoCompleteActive = 0;
    }
  }

  changePanel(param): void {
   // alert(document.getElementById('accordeonItem1'));
    for (let i = 0; i <= 2; i++){
      document.getElementById('accordeonItem' + i.toString()).style.color = '#aaaaaa';
    }
    document.getElementById('accordeonItem' + param.toString()).style.color = '#000000';
    if (param === 0 || param === 1){
      this.updateEventList(param);
    }
    this.status = param;
  }

  updateEventList(mode): void {
    if (mode === 1){
        this.eventList = [{"id": 12, "event_name": "test_event", "event_description": "bhj", "event_photo": '', "event_datetime_begin": "2021-01-27T19:53:56+02:00","event_datetime_end": "2021-01-27T19:53:56+02:00",'event_location':'Softserve, Lviv','event_organsizer':'Softserve', "event_rating": 0}];
    }
    else{
      this.eventList = [{"id": 12, "event_name": "test_event1", "event_description": "bhj", "event_photo": '', "event_datetime_begin": "2021-01-27T19:53:56+02:00","event_datetime_end": "2021-01-27T20:53:56+02:00",'event_location':'Softserve, Lviv','event_organsizer':'Softserve', "event_rating": 0}];
    }
  }

  updateUser(): void {
    this.loading = 1;
    this.userPageService.updateUser(this.updatedUser)
      .subscribe(
        data => {
            this.loading = 0;
            this.userProvider.setUser(this.updatedUser);
            this.currentUser = this.userProvider.getUser();
        },
        error => {
            this.loading = 0;
        }
      );
  }

  resetUser(): void{
    this.updatedUser = JSON.parse(JSON.stringify(this.currentUser));
  }

  calculateDuration(event): string{
    let beginEvent = new Date(event.event_datetime_begin);
    let endEvent = new Date(event.event_datetime_end);
    let diff_in_hours = (endEvent.getTime() - beginEvent.getTime())/3600000;//milliseconds in one minute
    let diff_in_days = Math.ceil(diff_in_hours/24);
    let diff_in_month = Math.ceil( diff_in_hours/30);
    let diff_in_years = Math.ceil(diff_in_hours/365);
    if(diff_in_hours < 24)return diff_in_hours + ' hrs';
    else
      if(diff_in_days < 30) return diff_in_days + ' days';
      else
      if(diff_in_month > 30) return diff_in_month + ' month';
      else
        return diff_in_years + ' years';
  }

  calculateBeginEnd(event): string{
    let beginEvent = new Date(event.event_datetime_begin);
    let endEvent = new Date(event.event_datetime_end);
    if (beginEvent.getDay() === endEvent.getDay() && beginEvent.getMonth() === endEvent.getMonth() &&  beginEvent.getFullYear() === endEvent.getFullYear()){
       return beginEvent.toUTCString().substring(0, 22) + ' - ' + endEvent.toTimeString().substring(0, 5);
    }
    else{
      return beginEvent.toUTCString().substring(0, 22) + ' - ' + endEvent.toUTCString().substring(0, 22);

    }
  }
}
