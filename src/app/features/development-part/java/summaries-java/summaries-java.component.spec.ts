import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesJavaComponent } from './summaries-java.component';

describe('SummariesJavaComponent', () => {
  let component: SummariesJavaComponent;
  let fixture: ComponentFixture<SummariesJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
