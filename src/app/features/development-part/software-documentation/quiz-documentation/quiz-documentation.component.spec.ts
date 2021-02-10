import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDocumentationComponent } from './quiz-documentation.component';

describe('QuizDocumentationComponent', () => {
  let component: QuizDocumentationComponent;
  let fixture: ComponentFixture<QuizDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
