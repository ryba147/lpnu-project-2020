import { Component, OnInit } from '@angular/core';

import { Event } from '../interfaces/event.interface';
import { EventsService } from '../services/events.service';
import { ResponsePage } from '../interfaces/response-page.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  events: Event[];
  next_page_num: number | null;
  previous_page_num: number | null;
  page_num: number;
  has_next: boolean;
  has_prev: boolean;

  page_status: string;

  ngOnInit(): void {
    this.reloadData();
  }

  setProperties(resp: ResponsePage): void {
    this.events = resp.results;
    this.next_page_num = resp.next_page;
    this.previous_page_num = resp.previous_page;
    this.page_num = resp.page;
    this.has_next = resp.has_next;
    this.has_prev = resp.has_previous;
  }

  // if page with query number does not exist the {"results": ""} with status 404 will be returned
  reloadData(): void {
    this.page_status = "loading";
    this.eventsService.getPage(1).subscribe(response => {
      this.setProperties(response);
      this.page_status = "load_success";
    }, error => { this.page_status = "load_failed"; }
    );
  }

  fetchPrevious(): void {
    this.eventsService.getPage(this.previous_page_num).subscribe((response) => {
      this.setProperties(response);
    });
  }

  fetchNext(): void {
    this.eventsService.getPage(this.next_page_num).subscribe((response) => {
      this.setProperties(response);
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
