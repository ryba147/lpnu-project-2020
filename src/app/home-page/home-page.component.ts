import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "../interfaces/user";
import { EventsService } from "../events.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {

  constructor(private eventsService: EventsService) {}

  users: Observable<User[]>;

  ngOnInit() {
    this.reloadData();
  }
 
  deleteCustomers() {
    this.eventsService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.users = this.eventsService.getEventsList();
    console.log(this.users);
  }
}
