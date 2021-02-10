import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsSqlComponent } from './learning-cards-sql.component';

describe('LearningCardsSqlComponent', () => {
  let component: LearningCardsSqlComponent;
  let fixture: ComponentFixture<LearningCardsSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
