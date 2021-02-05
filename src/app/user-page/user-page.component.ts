import { Component, OnInit } from '@angular/core';
import {UserProvider} from '../services/user.provider';
import {passBoolean} from 'protractor/built/util';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CityProvider} from '../services/ city.provider';

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
  updatedUser = this.userProvider.getUser();
  autoCompleteChosen = 1;
  selectedCities = [];
  autoCompleteActive = 0;
  form: FormGroup;
  response = 0;
  oldPass: string;
  confPass: string;
  edit = 0;
  private stringPattern = '^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$';

  constructor(public fb: FormBuilder, private userProvider: UserProvider, private cityProvider: CityProvider) { }

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
      firstname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      city: ['', [Validators.required, Validators.pattern(this.stringPattern)]],
      old_password: ['', [Validators.required, Validators.pattern('^[a-z0-9A-Z._%+-]+@[a-zA-Z.-]+\\.[a-z]{2,4}$')]],
      new_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      date: [''],
      pets: ['']
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
        this.eventList = [{"id": 12, "event_name": "test_event", "event_description": "bhj", "event_photo": '', "event_date": "2021-01-27T19:53:56+02:00", "event_rating": 0}];
    }
    else{
      this.eventList = [{"id": 12, "event_name": "test_event_1", "event_description": "bhj", "event_photo": '', "event_date": "2021-01-27T19:53:56+02:00", "event_rating": 0}];
    }
  }

  updateUser(): void {

  }

  resetUser(): void{
    this.updatedUser = this.userProvider.getUser();
  }
}
