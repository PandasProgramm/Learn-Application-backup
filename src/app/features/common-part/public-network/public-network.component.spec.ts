import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNetworkComponent } from './public-network.component';

describe('PublicNetworkComponent', () => {
  let component: PublicNetworkComponent;
  let fixture: ComponentFixture<PublicNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
