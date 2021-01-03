import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header><div style="width: 100%;margin: 0;padding: 0;min-height: calc(100vh - 210px);"><router-outlet></router-outlet></div><app-footer></app-footer>`
})
export class AppComponent {
  title = 'frontend';
}
