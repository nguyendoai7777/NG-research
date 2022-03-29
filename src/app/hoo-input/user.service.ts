import { Injectable } from '@angular/core';
import {delay, map, Observable, of} from "rxjs";
import {IUser, USER} from "./constant";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(query?: string): Observable<IUser[]> {
    return of(USER).pipe(
      delay(1000),
      map((eachUser) => eachUser.filter((k: IUser) => {
        if(!query) return true;
        return (
          k.name.toLowerCase().startsWith(query.toLowerCase()) ||
          k.username.toLowerCase().startsWith(query.toLowerCase())
        );
      }))
    )
  }
}
