import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesBusinessEnvironmentComponent } from './summaries-business-environment.component';

describe('SummariesBusinessEnvironmentComponent', () => {
  let component: SummariesBusinessEnvironmentComponent;
  let fixture: ComponentFixture<SummariesBusinessEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesBusinessEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesBusinessEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
