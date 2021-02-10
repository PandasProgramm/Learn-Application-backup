import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarysSoftwareProductionComponent } from './summarys-software-production.component';

describe('SummarysSoftwareProductionComponent', () => {
  let component: SummarysSoftwareProductionComponent;
  let fixture: ComponentFixture<SummarysSoftwareProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarysSoftwareProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarysSoftwareProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
