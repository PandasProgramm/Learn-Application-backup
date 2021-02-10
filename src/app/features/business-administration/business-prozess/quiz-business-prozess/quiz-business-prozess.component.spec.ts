import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBusinessProzessComponent } from './quiz-business-prozess.component';

describe('QuizBusinessProzessComponent', () => {
  let component: QuizBusinessProzessComponent;
  let fixture: ComponentFixture<QuizBusinessProzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBusinessProzessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBusinessProzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
