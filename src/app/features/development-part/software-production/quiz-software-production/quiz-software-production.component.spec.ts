import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSoftwareProductionComponent } from './quiz-software-production.component';

describe('QuizSoftwareProductionComponent', () => {
  let component: QuizSoftwareProductionComponent;
  let fixture: ComponentFixture<QuizSoftwareProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSoftwareProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSoftwareProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
