import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizJavaComponent } from './quiz-java.component';

describe('QuizJavaComponent', () => {
  let component: QuizJavaComponent;
  let fixture: ComponentFixture<QuizJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
