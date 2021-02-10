import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineOperationComponent } from './routine-operation.component';

describe('RoutineOperationComponent', () => {
  let component: RoutineOperationComponent;
  let fixture: ComponentFixture<RoutineOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
