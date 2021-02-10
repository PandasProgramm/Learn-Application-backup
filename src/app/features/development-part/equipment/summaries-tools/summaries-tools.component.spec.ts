import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesToolsComponent } from './summaries-tools.component';

describe('SummariesToolsComponent', () => {
  let component: SummariesToolsComponent;
  let fixture: ComponentFixture<SummariesToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
