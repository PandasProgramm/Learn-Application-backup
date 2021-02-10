import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBusinessEnviromentComponent } from './quiz-business-enviroment.component';

describe('QuizBusinessEnviromentComponent', () => {
  let component: QuizBusinessEnviromentComponent;
  let fixture: ComponentFixture<QuizBusinessEnviromentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBusinessEnviromentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBusinessEnviromentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
