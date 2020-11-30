import { from } from 'rxjs';
import {User} from './user';
import {Event} from './event';
export class Comment{
    comment_id:int;
    event_id:int;
    author_id:int;
    comment_text:string;
    pub_date:Date;
}
