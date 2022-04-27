import { Inject, Injectable } from '@angular/core';
import {LoggerService} from './logger.service'

export class ProductService {

  constructor(@Inject(LoggerService) private logger: LoggerService) {
    console.log('Product Service Created');
  }

  public getProducts() {
    this.logger.log('get real products was called');
    let products = [];

    products = [
      { quantity: 1, name: 'Memory Card', price: 500},
      { quantity: 2, name: 'Pen Drive', price: 750},
      { quantity: 3, name: 'Power Bank', price: 100},
    ];

    return products;
  }
}
