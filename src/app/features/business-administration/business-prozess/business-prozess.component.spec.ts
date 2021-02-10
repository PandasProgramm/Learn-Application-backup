import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProzessComponent } from './business-prozess.component';

describe('BusnessProzessComponent', () => {
  let component: BusinessProzessComponent;
  let fixture: ComponentFixture<BusinessProzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessProzessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
