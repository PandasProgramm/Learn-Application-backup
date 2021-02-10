import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizToolsComponent } from './quiz-tools.component';

describe('QuizToolsComponent', () => {
  let component: QuizToolsComponent;
  let fixture: ComponentFixture<QuizToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
