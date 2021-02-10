import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesAnalysisComponent } from './summaries-analysis.component';

describe('SummariesAnalysisComponent', () => {
  let component: SummariesAnalysisComponent;
  let fixture: ComponentFixture<SummariesAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
