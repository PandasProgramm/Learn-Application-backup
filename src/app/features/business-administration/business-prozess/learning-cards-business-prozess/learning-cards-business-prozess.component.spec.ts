import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsBusinessProzessComponent } from './learning-cards-business-prozess.component';

describe('LearningCardsBusinessProzessComponent', () => {
  let component: LearningCardsBusinessProzessComponent;
  let fixture: ComponentFixture<LearningCardsBusinessProzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsBusinessProzessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsBusinessProzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
