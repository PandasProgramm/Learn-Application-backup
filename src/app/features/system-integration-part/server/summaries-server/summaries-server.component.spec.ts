import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesServerComponent } from './summaries-server.component';

describe('SummariesServerComponent', () => {
  let component: SummariesServerComponent;
  let fixture: ComponentFixture<SummariesServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
