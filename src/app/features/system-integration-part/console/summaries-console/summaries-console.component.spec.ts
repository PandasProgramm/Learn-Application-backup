import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesConsoleComponent } from './summaries-console.component';

describe('SummariesConsoleComponent', () => {
  let component: SummariesConsoleComponent;
  let fixture: ComponentFixture<SummariesConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
