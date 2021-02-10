import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSqlComponent } from './quiz-sql.component';

describe('QuizSqlComponent', () => {
  let component: QuizSqlComponent;
  let fixture: ComponentFixture<QuizSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
