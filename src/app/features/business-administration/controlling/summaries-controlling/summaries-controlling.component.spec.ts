import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesControllingComponent } from './summaries-controlling.component';

describe('SummariesControllingComponent', () => {
  let component: SummariesControllingComponent;
  let fixture: ComponentFixture<SummariesControllingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesControllingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesControllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
