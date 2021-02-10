import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesWebAppComponent } from './summaries-web-app.component';

describe('SummariesWebAppComponent', () => {
  let component: SummariesWebAppComponent;
  let fixture: ComponentFixture<SummariesWebAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesWebAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
