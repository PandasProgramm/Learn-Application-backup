import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsJavaComponent } from './learning-cards-java.component';

describe('LearningCardsJavaComponent', () => {
  let component: LearningCardsJavaComponent;
  let fixture: ComponentFixture<LearningCardsJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
