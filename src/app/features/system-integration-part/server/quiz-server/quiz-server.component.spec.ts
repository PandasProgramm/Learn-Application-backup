import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizServerComponent } from './quiz-server.component';

describe('QuizServerComponent', () => {
  let component: QuizServerComponent;
  let fixture: ComponentFixture<QuizServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
