import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNetworkEngineeringComponent } from './quiz-network-engineering.component';

describe('QuizNetworkEngineeringComponent', () => {
  let component: QuizNetworkEngineeringComponent;
  let fixture: ComponentFixture<QuizNetworkEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizNetworkEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizNetworkEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
