import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSafetyComponent } from './it-safety.component';

describe('ItSavetyComponent', () => {
  let component: ItSafetyComponent;
  let fixture: ComponentFixture<ItSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
