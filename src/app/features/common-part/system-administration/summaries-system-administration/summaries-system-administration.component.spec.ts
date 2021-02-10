import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesSystemAdministrationComponent } from './summaries-system-administration.component';

describe('SummariesSystemAdministrationComponent', () => {
  let component: SummariesSystemAdministrationComponent;
  let fixture: ComponentFixture<SummariesSystemAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesSystemAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesSystemAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
