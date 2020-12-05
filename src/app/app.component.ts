import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header><router-outlet></router-outlet><app-footer></app-footer>`
})
export class AppComponent {
  title = 'frontend';
}
