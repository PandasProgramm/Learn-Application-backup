import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsCrossLinkedSystemsComponent } from './learning-cards-cross-linked-systems.component';

describe('LearningCardsCrossLinkedSystemsComponent', () => {
  let component: LearningCardsCrossLinkedSystemsComponent;
  let fixture: ComponentFixture<LearningCardsCrossLinkedSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsCrossLinkedSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsCrossLinkedSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
