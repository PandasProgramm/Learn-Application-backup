import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnalysisComponent } from './quiz-analysis.component';

describe('QuizAnalysisComponent', () => {
  let component: QuizAnalysisComponent;
  let fixture: ComponentFixture<QuizAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
