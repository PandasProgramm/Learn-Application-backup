import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossLinkedSystemsComponent } from './cross-linked-systems.component';

describe('CrossLinkedSystemsComponent', () => {
  let component: CrossLinkedSystemsComponent;
  let fixture: ComponentFixture<CrossLinkedSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossLinkedSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossLinkedSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
