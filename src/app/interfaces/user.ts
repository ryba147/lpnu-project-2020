import { Data } from '@angular/router';

interface UserInterface{
    first_name: string;
    last_name: string;
    birth_date: Date;
    email:string;
    password:string;
    city:string;
    sex?:string;
    family_status?:string;
    pets?:string;
    organizer:boolean;
    rating?:number;
}

export class User implements UserInterface{
    first_name: string;
    last_name: string;
    birth_date: Date;
    email: string;
    password: string;
    city: string;
    sex?: string;
    family_status?: string;
    pets?: string;
    organizer: boolean;
    rating?: number;

}