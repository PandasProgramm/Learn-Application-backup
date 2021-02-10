import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkEngineeringComponent } from './network-engineering.component';

describe('NetworkEngineeringComponent', () => {
  let component: NetworkEngineeringComponent;
  let fixture: ComponentFixture<NetworkEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
