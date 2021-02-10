import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCrossLinkedSystemsComponent } from './quiz-cross-linked-systems.component';

describe('QuizCrossLinkedSystemsComponent', () => {
  let component: QuizCrossLinkedSystemsComponent;
  let fixture: ComponentFixture<QuizCrossLinkedSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCrossLinkedSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCrossLinkedSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
