import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsRoutineOperationComponent } from './learning-cards-routine-operation.component';

describe('LearningCardsRoutineOperationComponent', () => {
  let component: LearningCardsRoutineOperationComponent;
  let fixture: ComponentFixture<LearningCardsRoutineOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsRoutineOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsRoutineOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
