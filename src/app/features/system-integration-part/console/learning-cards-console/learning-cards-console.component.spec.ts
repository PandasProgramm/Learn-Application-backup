import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsConsoleComponent } from './learning-cards-console.component';

describe('LearningCardsConsoleComponent', () => {
  let component: LearningCardsConsoleComponent;
  let fixture: ComponentFixture<LearningCardsConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
