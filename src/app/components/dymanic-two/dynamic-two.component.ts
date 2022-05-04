import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-two',
  templateUrl: './dynamic-two.component.html',
  styleUrls: ['./dynamic-two.component.scss']
})
export class DynamicTwoComponent implements OnInit {
  @Input() data?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
