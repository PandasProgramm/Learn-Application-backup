import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEnvironmentComponent } from './business-environment.component';

describe('BusinessEnviromentComponent', () => {
  let component: BusinessEnvironmentComponent;
  let fixture: ComponentFixture<BusinessEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
