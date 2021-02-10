import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApplicationsComponent } from './web-applications.component';

describe('WebApplicationsComponent', () => {
  let component: WebApplicationsComponent;
  let fixture: ComponentFixture<WebApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
