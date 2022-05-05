import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { debounceTime, Subject } from "rxjs";

import { Rolldate } from "src/assets/3rd-party-lib/ios-picker.js";

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
    new Rolldate({
      el: '#date-group1-1',
      format: 'YYYY-MM-DD hh-mm-ss',
      beginYear: 1990,
      endYear: 2050,
      cfg: {
        language: 'vi',
        cancel: 'Huỷ',
        confirm: 'Lưu',
        title: 'Chọn thời gian',
      }
    })
  }
}
