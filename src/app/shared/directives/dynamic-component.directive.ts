import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[addDynamicComponent]'
})
export class DynamicComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
