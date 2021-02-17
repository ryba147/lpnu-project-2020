import { Event } from './event.interface';

export class ResponsePage {
  page: number;
  total: number;
  num_pages: number;
  previous_page: number | null;
  next_page: number | null;
  has_next: boolean;
  has_previous: boolean;
  results: Event[];
}
