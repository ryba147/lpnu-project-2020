export class User {
  first_name: string;
  last_name: string;
  birth_date: Date;
  email: string;
  password: string;
  city: string;
  sex?: string = 'not';
  family_status?: string = 'not specified';
  pets?: string;
  organizer: boolean;
  rating?: number;
}
