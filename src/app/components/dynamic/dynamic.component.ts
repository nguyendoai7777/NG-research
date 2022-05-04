import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DynamicComponentDirective } from "../../shared/directives/dynamic-component.directive";

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @Input() data?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
