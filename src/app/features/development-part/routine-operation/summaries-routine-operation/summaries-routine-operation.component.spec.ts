import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesRoutineOperationComponent } from './summaries-routine-operation.component';

describe('SummariesRoutineOperationComponent', () => {
  let component: SummariesRoutineOperationComponent;
  let fixture: ComponentFixture<SummariesRoutineOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesRoutineOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesRoutineOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
