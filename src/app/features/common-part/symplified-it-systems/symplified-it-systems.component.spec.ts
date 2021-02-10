import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymplifiedItSystemsComponent } from './symplified-it-systems.component';

describe('SymplifiedItSystemsComponent', () => {
  let component: SymplifiedItSystemsComponent;
  let fixture: ComponentFixture<SymplifiedItSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymplifiedItSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymplifiedItSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
