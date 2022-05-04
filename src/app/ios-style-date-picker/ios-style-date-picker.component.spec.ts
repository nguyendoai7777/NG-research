import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosStyleDatePickerComponent } from './ios-style-date-picker.component';

describe('IosStyleDatePickerComponent', () => {
  let component: IosStyleDatePickerComponent;
  let fixture: ComponentFixture<IosStyleDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosStyleDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IosStyleDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
