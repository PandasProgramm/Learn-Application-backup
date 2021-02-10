import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesMarketAndCustomerComponent } from './summaries-market-and-customer.component';

describe('SummariesMarketAndCustomerComponent', () => {
  let component: SummariesMarketAndCustomerComponent;
  let fixture: ComponentFixture<SummariesMarketAndCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesMarketAndCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesMarketAndCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
