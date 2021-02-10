import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsSystemAdministrationComponent } from './learning-cards-system-administration.component';

describe('LearningCardsSystemAdministrationComponent', () => {
  let component: LearningCardsSystemAdministrationComponent;
  let fixture: ComponentFixture<LearningCardsSystemAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsSystemAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsSystemAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
