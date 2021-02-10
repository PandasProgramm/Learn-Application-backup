import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizWebAppComponent } from './quiz-web-app.component';

describe('QuizWebAppComponent', () => {
  let component: QuizWebAppComponent;
  let fixture: ComponentFixture<QuizWebAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizWebAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
