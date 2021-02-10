import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesBusinessProzessComponent } from './summaries-business-prozess.component';

describe('SummariesBusinessProzessComponent', () => {
  let component: SummariesBusinessProzessComponent;
  let fixture: ComponentFixture<SummariesBusinessProzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesBusinessProzessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesBusinessProzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
