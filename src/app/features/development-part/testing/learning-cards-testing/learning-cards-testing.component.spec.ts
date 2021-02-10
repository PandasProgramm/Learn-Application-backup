import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsTestingComponent } from './learning-cards-testing.component';

describe('LearningCardsTestingComponent', () => {
  let component: LearningCardsTestingComponent;
  let fixture: ComponentFixture<LearningCardsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
