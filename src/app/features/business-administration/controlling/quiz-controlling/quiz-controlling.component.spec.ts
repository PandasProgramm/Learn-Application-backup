import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizControllingComponent } from './quiz-controlling.component';

describe('QuizControllingComponent', () => {
  let component: QuizControllingComponent;
  let fixture: ComponentFixture<QuizControllingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizControllingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizControllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
