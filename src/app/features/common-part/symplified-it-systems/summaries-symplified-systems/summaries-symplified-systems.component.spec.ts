import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesSymplifiedSystemsComponent } from './summaries-symplified-systems.component';

describe('SummariesSymplifiedSystemsComponent', () => {
  let component: SummariesSymplifiedSystemsComponent;
  let fixture: ComponentFixture<SummariesSymplifiedSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesSymplifiedSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesSymplifiedSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
