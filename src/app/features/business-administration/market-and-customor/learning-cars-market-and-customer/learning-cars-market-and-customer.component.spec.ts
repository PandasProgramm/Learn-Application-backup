import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCarsMarketAndCustomerComponent } from './learning-cars-market-and-customer.component';

describe('LearningCarsMarketAndCustomerComponent', () => {
  let component: LearningCarsMarketAndCustomerComponent;
  let fixture: ComponentFixture<LearningCarsMarketAndCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCarsMarketAndCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCarsMarketAndCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
