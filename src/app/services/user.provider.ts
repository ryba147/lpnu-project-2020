import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})

export class UserProvider {
  private user: User;
  
  public setUser(resp: User): void { 
    this.user = resp;
  }
  
  public getUser(): User {
    return this.user;
  }
}
