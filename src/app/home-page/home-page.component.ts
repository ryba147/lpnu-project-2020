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
  next: string;
  previous: string;

  ngOnInit(): void {
    this.reloadData();
  }

  // if page with query number does not exist the {"results": ""} with status 404 will be returned
  reloadData() {
    this.eventsService.getEventsList().subscribe(response => {
      this.events = response['results'];
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
