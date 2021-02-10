import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesDatabasesComponent } from './summaries-databases.component';

describe('SummariesDatabasesComponent', () => {
  let component: SummariesDatabasesComponent;
  let fixture: ComponentFixture<SummariesDatabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesDatabasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
