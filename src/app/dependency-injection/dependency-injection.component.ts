import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { LearnService } from "../shared/services/learn.service";
import { ActivatedRoute } from "@angular/router";
import { LoggerService } from "../shared/services/logger.service";
import { ProductService } from "../shared/services/product.service";
import { SRootService } from "../shared/services/s-root.service";
import { SPlatformService } from "../shared/services/s-platform.service";
import { FakeProductService } from "../shared/services/fake-product.service";

const DI_TOKEN = new InjectionToken<string>('DI CLASS');
const API_URL= new InjectionToken<string>('');
const PARAM_ID = new InjectionToken('param_id');
const PRODUCT = new InjectionToken('PRODUCT');

function factoryUrlParams(paramKey: string): (route: ActivatedRoute) => string | null {
  return (route: ActivatedRoute): string | null => {
    return route.snapshot.paramMap.get(paramKey);
  };
}

function resolveProductService(useType: boolean) {
  return (loggerService: LoggerService) =>
    useType ? new FakeProductService(loggerService) : new ProductService(loggerService);
}


@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
  providers: [
    LoggerService,
    {
      provide: PARAM_ID,
      useFactory: (l: LoggerService) => new LearnService(l),
      deps: [LoggerService]
    },
    {
      provide: DI_TOKEN,
      useValue: {
        get getNameOfThisService(): string {
          return this.value;
        },
        value: '[LearnService] DI_VALUE'
      }
    },
    {
      provide: PRODUCT,
      useFactory: resolveProductService(false),
      deps: [LoggerService],
    },
  ]
})
export class DependencyInjectionComponent implements OnInit {
  products: any[] = [];
  constructor(
    private readonly logService: LoggerService,
    @Inject(PARAM_ID) private readonly learnService: LearnService,
    @Inject(PRODUCT) private readonly productService: FakeProductService | ProductService,
    // private readonly productService: FakeProductService,
  ) { }
  getProducts() {
    this.products = this.productService.getProducts();
  }
  ngOnInit(): void {
    // console.log(this.rootService.getName);
    // console.log(this.platformService.getName);
    console.log(this.learnService);
    this.learnService.loglog();
    this.logService.log('[line 66 - (DependencyInjectionComponent)]: log\'s running in component')
  }

}
