import { Injectable } from '@angular/core';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root',
})

export class CityProvider {
  private selectedCity: string;
  private cityList:string[] = ['Lviv', 'Ryasne', 'Kyiv', 'Kamyanske', 'Kamyanets-Podilskii'];

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

  public getCityList(citySubstring:string): string[]{
    if(citySubstring.trimLeft().length < 3)return [];
    let currentArray:string[] = [];
    citySubstring = citySubstring.trimLeft();
    for (const city of this.cityList) {
      if ( city.substr(0, citySubstring.length).toLowerCase() === citySubstring.toLowerCase() ) {
        currentArray.push(city);
      }
    }
    return currentArray;
  }
}
