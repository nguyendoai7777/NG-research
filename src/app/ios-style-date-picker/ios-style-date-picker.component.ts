import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RollDate } from "src/assets/3rd-party-lib/ios-picker.js";

@Component({
  selector: 'app-ios-style-date-picker',
  templateUrl: './ios-style-date-picker.component.html',
  styleUrls: ['./ios-style-date-picker.component.scss']
})
export class IosStyleDatePickerComponent implements OnInit, AfterViewInit {
  constructor() {
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    new RollDate({
      el: '#date-group1-1',
      format: 'DD/MM',
      beginYear: 1990,
      endYear: 2050,
      trigger: 'tap',
      cfg: {
        language: 'vi',
      }
    })
  }
}
