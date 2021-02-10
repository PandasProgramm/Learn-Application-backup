import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesPublicNetworkComponent } from './summaries-public-network.component';

describe('SummariesPublicNetworkComponent', () => {
  let component: SummariesPublicNetworkComponent;
  let fixture: ComponentFixture<SummariesPublicNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesPublicNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesPublicNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
