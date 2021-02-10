import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessAdministrationComponent } from './buisness-administration.component';

describe('BuisnessAdministrationComponent', () => {
  let component: BuisnessAdministrationComponent;
  let fixture: ComponentFixture<BuisnessAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuisnessAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
