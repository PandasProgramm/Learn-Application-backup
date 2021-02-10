import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsAnalysisComponent } from './learning-cards-analysis.component';

describe('LearningCardsAnalysisComponent', () => {
  let component: LearningCardsAnalysisComponent;
  let fixture: ComponentFixture<LearningCardsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
