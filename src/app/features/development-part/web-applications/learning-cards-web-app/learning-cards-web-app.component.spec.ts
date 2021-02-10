import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsWebAppComponent } from './learning-cards-web-app.component';

describe('LearningCardsWebAppComponent', () => {
  let component: LearningCardsWebAppComponent;
  let fixture: ComponentFixture<LearningCardsWebAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsWebAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
