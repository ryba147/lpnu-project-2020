import { Component, OnInit } from '@angular/core';
import {UserProvider} from '../services/user.provider';
import {passBoolean} from 'protractor/built/util';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CityProvider} from '../services/ city.provider';
import {UserpageService} from '../services/userpage.service';
import {EventsService} from '../services/events.service';
import { User } from '../interfaces/user.interface';
import { runInThisContext } from 'vm';
import { flatten, templateJitUrl } from '@angular/compiler';
import { toUnicode } from 'punycode';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  // 0 - recent, 1 - user pages, 2 - settings
  //Переробити під булеан
  status = 0;
  loading = 0;
  //Перекинути в конструкторі
  currentUser: User;
  eventList: Array<Event>;
  //Забрати
  updatedUser: User;
  autoCompleteChosen: boolean;
  selectedCities: Array<string>;
  autoCompleteActive: boolean;
  form: FormGroup;
  response = 0;
  oldPass: string;
  confPass: string;
  private stringPattern = '^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$';

  constructor(public fb: FormBuilder, private userProvider: UserProvider, private cityProvider: CityProvider, private userPageService: UserpageService, private eventsService: EventsService) {
    this.currentUser = this.userProvider.getUser();
    this.eventList = [];
    this.selectedCities = [];
  }

  ngOnInit(): void {
    this.changePanel(0);
  }

  get f() { return this.form.controls; }

  public updateSelectedCities(): void{
    if (this.cityProvider.compareWithSelectedCity(this.updatedUser.city) === true && this.autoCompleteChosen === true) {return; }
    this.autoCompleteChosen = false;
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
    this.updatedUser = this.userProvider.getUser();
    this.autoCompleteActive = false;
    this.autoCompleteChosen = true;
    this.oldPass = '';
    this.confPass = '';
    this.updatedUser.password = '';
    this.form = this.fb.group({
      profile_photo: [''],
      firstname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      city: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      old_password: [''],
      new_password: [''],
      confirm_password: [''],
      date: [''],
      pets: [''],
      sex: [''],
      family_status: ['']
    }, {validator: this.passwordMatcher});
  }

  private passwordMatcher(group: FormGroup): null | { nomatch: boolean} {
    if(group.get('new_password') !== null && group.get('old_password') !== null && group.get('confirm_password') !== null ){
      const oldPassword: string = group.get('old_password').value;
      const newPassword: string = group.get('new_password').value;
      const confirmPassword: string = group.get('confirm_password').value;
      if (oldPassword === '' && newPassword === '' && confirmPassword === '') {return null; }
      if (oldPassword === this.userProvider.getUser().password && newPassword === confirmPassword && newPassword.length >= 8 && newPassword.length <= 12 ) {return null; }
      return {nomatch: true};
    }
  }

  setCity(city): void {
    if (this.cityProvider.setSelectedCity(city) === true){
      this.autoCompleteChosen = true;
      this.updatedUser.city = city;
      this.autoCompleteActive = false;
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
    else{
      this.createForm();
    }
    this.status = param;
  }

  updateEventList(mode): void {
    if (mode === 1){
      this.eventsService.getEventsList()
        .subscribe(data => {
          this.eventList = data.results;
        },
          error =>  {

          });
    }
    else{
      this.eventsService.getEventsList()
        .subscribe(data => {
          this.eventList = data.results;
        },
          error => {
              const a = error;
          });
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

  userButtonClick(){
    document.getElementById('profile_photo').click();
  }

  resetUser(): void{
    this.updatedUser = this.userProvider.getUser();
  }

  calculateDuration(event): string{
    const beginEvent = new Date(event.event_datetime_begin);
    const endEvent = new Date(event.event_datetime_end);
    const diff_in_hours = Math.ceil((endEvent.getTime() - beginEvent.getTime()) / 3600000); // milliseconds in one minute
    const diff_in_mins = diff_in_hours * 60;
    const diff_in_days = Math.ceil(diff_in_hours / 24);
    const diff_in_month = Math.ceil( diff_in_hours / 30);
    const diff_in_years = Math.ceil(diff_in_hours / 365);
    if (diff_in_mins < 1) {return '<1 min'; }
    else
    if (diff_in_mins < 60) {return diff_in_mins + ' mins'; }
    else
    if (diff_in_hours < 24) {return diff_in_hours + ' hrs'; }
    else
      if (diff_in_days < 30) { return diff_in_days + ' days'; }
      else
      if (diff_in_month > 30) { return diff_in_month + ' month'; }
      else {
        return diff_in_years + ' years';
      }
  }

  calculateBeginEnd(event): string{
    const beginEvent = new Date(event.event_datetime_begin);
    const endEvent = new Date(event.event_datetime_end);
    if (beginEvent.getDay() === endEvent.getDay() && beginEvent.getMonth() === endEvent.getMonth() &&  beginEvent.getFullYear() === endEvent.getFullYear()){
       return beginEvent.toUTCString().substring(0, 22) + ' - ' + endEvent.toTimeString().substring(0, 5);
    }
    else{
      return beginEvent.toUTCString().substring(0, 22) + ' - ' + endEvent.toUTCString().substring(0, 22);
    }
  }


}
