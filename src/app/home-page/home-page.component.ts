import { Component, OnInit } from '@angular/core';

import { Event } from '../interfaces/event.interface';
import { HomePageService } from '../services/homepage.service';
import { ResponsePage } from '../interfaces/response-page.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private homePageService: HomePageService) {}

  events: Event[];
  next_page_num: number | null;
  previous_page_num: number | null;
  page_num: number;
  has_next: boolean;
  has_prev: boolean;

  page_status: string;
  searchText = '';

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
    // this.searchText = '';
    this.page_status = 'loading';

    this.homePageService.getPage(1, this.searchText).subscribe(
      (response) => {
        this.setProperties(response);
        this.page_status = 'load_success';
      },
      (error) => {
        this.page_status = 'load_failed';
      }
    );
  }

  fetchPrevious(): void {
    this.page_status = 'loading';

    this.homePageService
      .getPage(this.previous_page_num, this.searchText)
      .subscribe(
        (response) => {
          this.setProperties(response);
          this.page_status = 'load_success';
        },
        (error) => {
          this.page_status = 'load_failed';
        }
      );
  }

  fetchNext(): void {
    this.page_status = 'loading';

    this.homePageService.getPage(this.next_page_num, this.searchText).subscribe(
      (response) => {
        this.setProperties(response);
        this.page_status = 'load_success';
      },
      (error) => {
        this.page_status = 'load_failed';
      }
    );
  }

  search(): void {
    this.homePageService.getPage(1, this.searchText).subscribe((response) => {
      this.setProperties(response);
    }
    );
  }

  /*
  reloadData() {
    this.events = this.homePageService.getEventsList();
    console.log(this.events);
  }*/
}
