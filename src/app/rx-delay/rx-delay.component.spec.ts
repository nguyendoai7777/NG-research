import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxDelayComponent } from './rx-delay.component';

describe('RxDelayComponent', () => {
  let component: RxDelayComponent;
  let fixture: ComponentFixture<RxDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxDelayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
