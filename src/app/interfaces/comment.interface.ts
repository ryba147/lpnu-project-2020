import { User } from "./user.interface";
import { Event } from "./event.interface";
export class Comment {
  event: Event;
  author: User;
  comment_text: string;
  pub_date: Date;
}
