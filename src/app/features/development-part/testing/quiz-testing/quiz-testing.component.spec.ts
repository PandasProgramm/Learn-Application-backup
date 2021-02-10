import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTestingComponent } from './quiz-testing.component';

describe('QuizTestingComponent', () => {
  let component: QuizTestingComponent;
  let fixture: ComponentFixture<QuizTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
