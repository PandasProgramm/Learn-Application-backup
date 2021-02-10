import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMarketAndCustomerComponent } from './quiz-market-and-customer.component';

describe('QuizMarketAndCustomerComponent', () => {
  let component: QuizMarketAndCustomerComponent;
  let fixture: ComponentFixture<QuizMarketAndCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMarketAndCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMarketAndCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
