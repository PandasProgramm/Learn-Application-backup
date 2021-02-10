import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPublicNetworkComponent } from './quiz-public-network.component';

describe('QuizPublicNetworkComponent', () => {
  let component: QuizPublicNetworkComponent;
  let fixture: ComponentFixture<QuizPublicNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPublicNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPublicNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
