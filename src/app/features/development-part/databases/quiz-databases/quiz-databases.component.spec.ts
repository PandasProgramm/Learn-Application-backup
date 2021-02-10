import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDatabasesComponent } from './quiz-databases.component';

describe('QuizDatabasesComponent', () => {
  let component: QuizDatabasesComponent;
  let fixture: ComponentFixture<QuizDatabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDatabasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
