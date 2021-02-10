import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDocumentationComponent } from './software-documentation.component';

describe('SoftwareDocumentationComponent', () => {
  let component: SoftwareDocumentationComponent;
  let fixture: ComponentFixture<SoftwareDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
