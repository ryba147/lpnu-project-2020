import { Component, OnInit } from '@angular/core';
import {UserProvider} from '../services/user.provider';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  currentUser = this.userProvider.getUser();
  constructor(private userProvider: UserProvider) { }

  ngOnInit(): void {
    this.currentUser = this.userProvider.getUser();
    console.log(this.currentUser);
  }


}
