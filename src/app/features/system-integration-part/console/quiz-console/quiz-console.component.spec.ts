import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizConsoleComponent } from './quiz-console.component';

describe('QuizConsoleComponent', () => {
  let component: QuizConsoleComponent;
  let fixture: ComponentFixture<QuizConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
