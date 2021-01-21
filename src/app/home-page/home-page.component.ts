import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from '../interfaces/event.interface';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  events: Event[];

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.eventsService.getEventsList().subscribe((events) => {
      this.events = events;
      console.log(this.events);
    });
  }

  /*
  reloadData() {
    this.events = this.eventsService.getEventsList();
    console.log(this.events);
  }*/

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
}
