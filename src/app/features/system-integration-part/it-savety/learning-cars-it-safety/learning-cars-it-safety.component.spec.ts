import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCarsItSafetyComponent } from './learning-cars-it-safety.component';

describe('LearningCarsItSafetyComponent', () => {
  let component: LearningCarsItSafetyComponent;
  let fixture: ComponentFixture<LearningCarsItSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCarsItSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCarsItSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
