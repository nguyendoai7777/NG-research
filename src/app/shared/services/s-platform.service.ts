import { Injectable } from '@angular/core';

@Injectable()
export class SPlatformService {
  #name = 'SPlatformService';
  constructor() { }
  get getName() { return this.#name; }
}
