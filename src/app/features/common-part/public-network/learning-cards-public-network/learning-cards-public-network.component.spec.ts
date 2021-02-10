import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsPublicNetworkComponent } from './learning-cards-public-network.component';

describe('LearningCardsPublicNetworkComponent', () => {
  let component: LearningCardsPublicNetworkComponent;
  let fixture: ComponentFixture<LearningCardsPublicNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsPublicNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsPublicNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
