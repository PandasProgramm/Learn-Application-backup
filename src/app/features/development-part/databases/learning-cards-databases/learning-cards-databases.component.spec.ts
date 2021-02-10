import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsDatabasesComponent } from './learning-cards-databases.component';

describe('LearningCardsDatabasesComponent', () => {
  let component: LearningCardsDatabasesComponent;
  let fixture: ComponentFixture<LearningCardsDatabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsDatabasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCardsDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
