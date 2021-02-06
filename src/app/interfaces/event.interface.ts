export class Event {
  event_name: string;
  event_description: string;
  event_photo: string; // path to the image
  event_datetime_begin: Date;
  event_datetime_end: Date;
  event_rating?: number;
  event_location: string;
  event_organizer: string;
  event_duration: number;//Duration in minutes
}
