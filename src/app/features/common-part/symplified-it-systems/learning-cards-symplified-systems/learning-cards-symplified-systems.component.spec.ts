import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsSymplifiedSystemsComponent } from './learning-cards-symplified-systems.component';

describe('LearningCardsSymplifiedSystemsComponent', () => {
  let component: LearningCardsSymplifiedSystemsComponent;
  let fixture: ComponentFixture<LearningCardsSymplifiedSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsSymplifiedSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsSymplifiedSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
