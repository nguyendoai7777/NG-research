import { Component, OnInit, ViewChild } from '@angular/core';
import { Data, DynamicComponentRendering } from "../shared/types/shared.model";
import { DynamicComponent } from "../components/dynamic/dynamic.component";
import { DynamicComponentDirective } from "../shared/directives/dynamic-component.directive";
import { DynamicTwoComponent } from "../components/dymanic-two/dynamic-two.component";

@Component({
  selector: 'app-dynamic-rendering',
  templateUrl: './dynamic-rendering.component.html',
  styleUrls: ['./dynamic-rendering.component.scss']
})
export class DynamicRenderingComponent implements OnInit {
  @ViewChild(DynamicComponentDirective, {static: true}) addDynamicComponent!: DynamicComponentDirective;
  currentAdIndex = -1;
  items: DynamicComponentRendering[] = [
    {
      component: DynamicComponent,
      data: {
        label: 'Hello[1] $1',
        description: 'Component 1 [1]'
      }
    },
    {
      component: DynamicComponent,
      data: {
        label: 'Hello[1] $2',
        description: 'Component 1 [2]'
      }
    },
    {
      component: DynamicTwoComponent,
      data: {
        label: 'Hello[2] $1',
        value: 'Component 2 [1]'
      }
    },
    {
      component: DynamicTwoComponent,
      data: {
        label: 'Hello[2] $2',
        value: 'Component 2 [2]'
      }
    },
  ];
  interval: number | undefined;
  constructor(

  ) { }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.items.length;
    const adItem = this.items[this.currentAdIndex];

    const viewContainerRef = this.addDynamicComponent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<Data>(adItem.component);
    componentRef.instance.data = adItem.data;
  }


  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
