import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { delay, delayWhen, interval, map, mapTo, Observable, of, race, take, tap, timer } from "rxjs";

@Component({
  selector: 'app-rx-delay',
  templateUrl: './rx-delay.component.html',
  styleUrls: ['./rx-delay.component.scss']
})
export class RxDelayComponent implements OnInit, AfterViewChecked {
  DELAY = 6000;
  emit = interval(1000);
  delay = of('ahuhu').pipe(delay(this.DELAY));



  constructor() { }
  ngAfterViewChecked() {
    console.log('view check')
  }

  ngOnInit(): void {
    this.emit.pipe(
      take(1),
      delayWhen(() => this.delay),
      map(() => `new value emit before ${this.DELAY / 1000}s`)
    ) // .subscribe(console.log);

    race([
      interval(1500), //emit 1.5s
      interval(1000).pipe(take(1)), //emit every 1s
      interval(2000), //emit every 2s
      interval(2500) //emit every 2.5s
    ]).pipe(
      map(x => of(x)),
      tap(() => {
        /* do anything in side effect */
        console.log('i can do anything')
      })
    ).subscribe()
  }

}
