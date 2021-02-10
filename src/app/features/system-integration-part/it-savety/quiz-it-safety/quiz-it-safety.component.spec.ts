import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItSafetyComponent } from './quiz-it-safety.component';

describe('QuizItSafetyComponent', () => {
  let component: QuizItSafetyComponent;
  let fixture: ComponentFixture<QuizItSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizItSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizItSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
