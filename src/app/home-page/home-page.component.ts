import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Event } from "../interfaces/event.interface";
import { EventsService } from "../services/events.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {

  constructor(private eventsService: EventsService) {}

  events: Observable<Event[]>;

  ngOnInit() {
    this.reloadData();
  }
  
  /*
  deleteCustomers() {
    this.eventsService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
  */
 
  reloadData() {
    this.events = this.eventsService.getEventsList();
    console.log(this.events);
  }
}
