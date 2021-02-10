import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesNetworkEngineeringComponent } from './summaries-network-engineering.component';

describe('SummariesNetworkEngineeringComponent', () => {
  let component: SummariesNetworkEngineeringComponent;
  let fixture: ComponentFixture<SummariesNetworkEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesNetworkEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesNetworkEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
