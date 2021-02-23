import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})

export class UserProvider {
  private user: User;
  public setUser(resp: User): void {
    this.user = (resp === null)? null: JSON.parse(JSON.stringify(resp));
  }

  public getUser(): User|null {
    if (this.user === null || this.user === undefined) {return null; }
    else {
    return JSON.parse(JSON.stringify(this.user));
    }
  }

}
