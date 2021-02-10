import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsDocumentationComponent } from './learning-cards-documentation.component';

describe('LearningCardsDocumentationComponent', () => {
  let component: LearningCardsDocumentationComponent;
  let fixture: ComponentFixture<LearningCardsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
