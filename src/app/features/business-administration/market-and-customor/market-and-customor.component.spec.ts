import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketAndCustomorComponent } from './market-and-customor.component';

describe('MarketAndCustomorComponent', () => {
  let component: MarketAndCustomorComponent;
  let fixture: ComponentFixture<MarketAndCustomorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketAndCustomorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketAndCustomorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
