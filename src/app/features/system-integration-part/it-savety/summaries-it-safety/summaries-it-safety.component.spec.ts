import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesItSafetyComponent } from './summaries-it-safety.component';

describe('SummariesItSafetyComponent', () => {
  let component: SummariesItSafetyComponent;
  let fixture: ComponentFixture<SummariesItSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesItSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesItSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
