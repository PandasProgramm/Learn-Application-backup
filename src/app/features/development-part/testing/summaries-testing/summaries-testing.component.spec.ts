import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesTestingComponent } from './summaries-testing.component';

describe('SummariesTestingComponent', () => {
  let component: SummariesTestingComponent;
  let fixture: ComponentFixture<SummariesTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
