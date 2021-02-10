import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsToolsComponent } from './learning-cards-tools.component';

describe('LearningCardsToolsComponent', () => {
  let component: LearningCardsToolsComponent;
  let fixture: ComponentFixture<LearningCardsToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
