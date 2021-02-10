import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsNetworkEngineeringComponent } from './learning-cards-network-engineering.component';

describe('LearningCardsNetworkEngineeringComponent', () => {
  let component: LearningCardsNetworkEngineeringComponent;
  let fixture: ComponentFixture<LearningCardsNetworkEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsNetworkEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsNetworkEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
