import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesDocumentationComponent } from './summaries-documentation.component';

describe('SummariesDocumentationComponent', () => {
  let component: SummariesDocumentationComponent;
  let fixture: ComponentFixture<SummariesDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
