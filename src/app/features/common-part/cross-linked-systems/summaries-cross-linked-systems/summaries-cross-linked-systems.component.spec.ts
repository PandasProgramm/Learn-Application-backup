import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesCrossLinkedSystemsComponent } from './summaries-cross-linked-systems.component';

describe('SummariesCrossLinkedSystemsComponent', () => {
  let component: SummariesCrossLinkedSystemsComponent;
  let fixture: ComponentFixture<SummariesCrossLinkedSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesCrossLinkedSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesCrossLinkedSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
