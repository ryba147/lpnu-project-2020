import { Injectable } from '@angular/core';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root',
})

export class CityProvider {
  private selectedCity: string;
  private cityList: Array<string>;
  public getCityList(): Array<string>
  {
    this.updateCityList();
    return this.cityList.slice(0, 9);
  }
  public setSelectedCity(city: string): boolean{
    if(this.cityList.indexOf(city) !== -1){
      this.selectedCity = city;
      return true;
    }
    return false;
  }
  public compareWithSelectedCity(city: string): boolean{
    return this.selectedCity === city;
  }
  public updateCityList(): void{
    this.cityList = ['Lviv', 'Ryasne', 'Kyiv', 'Kamyanske', 'Kamyanets-Podilskii'];
  }
}
