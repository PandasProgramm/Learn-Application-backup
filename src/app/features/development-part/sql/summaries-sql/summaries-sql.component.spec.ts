import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesSqlComponent } from './summaries-sql.component';

describe('SummariesSqlComponent', () => {
  let component: SummariesSqlComponent;
  let fixture: ComponentFixture<SummariesSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
