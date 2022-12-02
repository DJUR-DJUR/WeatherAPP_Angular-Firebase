import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysSliderComponent } from './days-slider.component';

describe('DaysSliderComponent', () => {
  let component: DaysSliderComponent;
  let fixture: ComponentFixture<DaysSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
