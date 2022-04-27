import { Inject } from "@angular/core";
import { LoggerService } from "./logger.service";

export class FakeProductService {
  constructor(@Inject(LoggerService) private readonly logger: LoggerService) {
    console.log('FakeProduct Service Created');
  }

  public getProducts() {
    this.logger.log('get fake products was called');
    return [
      {quantity: 1, name: 'Memory Card', price: 500},
      {quantity: 2, name: 'Pen Drive', price: 750},
      {quantity: 3, name: 'Power Bank', price: 100},
      {quantity: 4, name: 'Laptop', price: 10000},
      {quantity: 5, name: 'Desktop', price: 100},
    ];
  }
}
