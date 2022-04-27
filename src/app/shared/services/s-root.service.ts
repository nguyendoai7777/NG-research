import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class SRootService {
  #name = 'SRootService'
  constructor() { }

  get getName(): string { return this.#name}
}
