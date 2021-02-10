import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsControllingComponent } from './learning-cards-controlling.component';

describe('LearningCardsControllingComponent', () => {
  let component: LearningCardsControllingComponent;
  let fixture: ComponentFixture<LearningCardsControllingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsControllingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsControllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
