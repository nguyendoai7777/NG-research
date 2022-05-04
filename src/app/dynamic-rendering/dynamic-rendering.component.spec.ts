import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRenderingComponent } from './dynamic-rendering.component';

describe('DynamicRenderingComponent', () => {
  let component: DynamicRenderingComponent;
  let fixture: ComponentFixture<DynamicRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
