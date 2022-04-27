import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class LearnService {
  #name = '[Learn Service]';
  constructor(
    @Inject(LoggerService) private loggerService: LoggerService
  ) { }

  loglog() {
    this.loggerService.log('[line 10 - (LearnService)]: log\'s running in service')
  }

  get getNameOfThisService(): string {
    return this.#name;
  }
  set getNameOfThisService(value: string) {
     this.#name = value;
  }
}
