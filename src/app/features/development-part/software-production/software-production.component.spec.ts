import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProductionComponent } from './software-production.component';

describe('SoftwareProductionComponent', () => {
  let component: SoftwareProductionComponent;
  let fixture: ComponentFixture<SoftwareProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
