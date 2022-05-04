import { Type } from "@angular/core";

export interface DynamicComponentRendering {
  component: Type<any>;
  data: any
}

export interface Data {
  data: any;
}
