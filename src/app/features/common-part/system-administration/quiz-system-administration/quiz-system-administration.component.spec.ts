import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSystemAdministrationComponent } from './quiz-system-administration.component';

describe('QuizSystemAdministrationComponent', () => {
  let component: QuizSystemAdministrationComponent;
  let fixture: ComponentFixture<QuizSystemAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSystemAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSystemAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
