import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsServerComponent } from './learning-cards-server.component';

describe('LearningCardsServerComponent', () => {
  let component: LearningCardsServerComponent;
  let fixture: ComponentFixture<LearningCardsServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
