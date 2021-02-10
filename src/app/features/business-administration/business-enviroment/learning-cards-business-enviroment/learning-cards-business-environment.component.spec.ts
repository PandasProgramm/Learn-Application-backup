import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsBusinessEnvironmentComponent } from './learning-cards-business-environment.component';

describe('LearningCardsBusinessEnviromentComponent', () => {
  let component: LearningCardsBusinessEnvironmentComponent;
  let fixture: ComponentFixture<LearningCardsBusinessEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsBusinessEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsBusinessEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
