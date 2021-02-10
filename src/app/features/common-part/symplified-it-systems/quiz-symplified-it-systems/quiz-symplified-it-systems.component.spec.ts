import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSymplifiedItSystemsComponent } from './quiz-symplified-it-systems.component';

describe('QuizSymplifiedItSystemsComponent', () => {
  let component: QuizSymplifiedItSystemsComponent;
  let fixture: ComponentFixture<QuizSymplifiedItSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSymplifiedItSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSymplifiedItSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
