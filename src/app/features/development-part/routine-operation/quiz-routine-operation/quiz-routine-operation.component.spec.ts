import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRoutineOperationComponent } from './quiz-routine-operation.component';

describe('QuizRoutineOperationComponent', () => {
  let component: QuizRoutineOperationComponent;
  let fixture: ComponentFixture<QuizRoutineOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizRoutineOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizRoutineOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
