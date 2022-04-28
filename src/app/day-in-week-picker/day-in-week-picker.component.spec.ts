import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInWeekPickerComponent } from './day-in-week-picker.component';

describe('DayInWeekPickerComponent', () => {
  let component: DayInWeekPickerComponent;
  let fixture: ComponentFixture<DayInWeekPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayInWeekPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayInWeekPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
