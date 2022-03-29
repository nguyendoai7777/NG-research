import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooInputComponent } from './hoo-input.component';

describe('HooInputComponent', () => {
  let component: HooInputComponent;
  let fixture: ComponentFixture<HooInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HooInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
