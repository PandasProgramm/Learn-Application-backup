import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsSoftwareProductionComponent } from './learning-cards-software-production.component';

describe('LearningCardsSoftwareProductionComponent', () => {
  let component: LearningCardsSoftwareProductionComponent;
  let fixture: ComponentFixture<LearningCardsSoftwareProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsSoftwareProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsSoftwareProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
