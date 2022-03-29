import { Component, OnInit } from '@angular/core';
import { IUser, USER } from "./constant";
import { FormControl } from "@angular/forms";
import { UserService } from './user.service';
import { BehaviorSubject, debounceTime, map, Observable, startWith, switchAll, switchMap, tap } from "rxjs";

@Component({
  selector: 'app-hoo-input',
  templateUrl: './hoo-input.component.html',
  styleUrls: ['./hoo-input.component.scss']
})
export class HooInputComponent implements OnInit {
  users: IUser[] = [];
  queryInput = new FormControl('');
  loading = true;
  users$ = new Observable<IUser[]>();
  loading2 = new BehaviorSubject<boolean>(true);
  loading2$ = this.loading2.asObservable();

  constructor(
    private readonly userService: UserService
  ) {
  }

  ngOnInit(): void {
    /*this.queryInput.valueChanges.pipe(
      debounceTime(500),
      tap(() => {
        this.loading = true;
      }),
      startWith(''),
      switchMap((query: string) => this.userService.getUsers(query).pipe(
        tap(() => {
          this.loading = false
        })
      )),
    ).subscribe((users) => this.users = users);*/

    this.users$ = this.queryInput.valueChanges.pipe(
      debounceTime(500),
      tap(() => {
        console.log('loading')
        this.loading2.next(true);
      }),
      startWith(''),
      switchMap((query: string) => this.userService.getUsers(query).pipe(
        tap(() => {
          console.log('co data chua nhi')
          this.loading2.next(false);
        })
      )),
    )
  }

  /** this.queryInput.valueChanges.pipe(
   debounceTime(500),
   tap(() => {
          this.loading = true;
        }),
   startWith(''),
   ).subscribe((val) => {
          this.userService.getUsers(val).pipe(
            tap(() => {
              this.loading = false;
            })
          ).subscribe((users) => {
            this.users = users;
          })
        })
   }
   * */

}
