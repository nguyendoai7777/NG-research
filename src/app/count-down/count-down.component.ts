import {Component, OnInit} from '@angular/core';
import {interval, map, Observable, scan, startWith, take, takeWhile, tap, timer} from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  observer = {
    next: (val: any) => {
      console.log(val)
    }
  }
  start = 10;
  timer$ = new Observable();
  timer2$ = new Observable<string | number>();
  interval$ = interval(1000).pipe(
    takeWhile(x => x < 10)
  ).subscribe(this.observer)

  constructor() {}

  ngOnInit(): void {


    this.timer$ = timer(0, 1000).pipe(
      scan(acc => --acc, this.start + 1),
      takeWhile(x => x >= 0),
      tap()
    );

    this.timer2$ = timer(0,1000).pipe(
      map((x) => `0${this.start - x}`.slice(-2)),
      take(11)
    );
  }

}
