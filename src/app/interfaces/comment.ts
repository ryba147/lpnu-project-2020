import { from } from 'rxjs';
import {User} from './user';
import {Event} from './event';
export class Comment{
    event:Event;
    author:User;
    comment_text:string;
    pub_date:Date;
}