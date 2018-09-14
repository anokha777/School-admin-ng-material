import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeFrequencyComponent } from './fee-frequency.component';

describe('FeeFrequencyComponent', () => {
  let component: FeeFrequencyComponent;
  let fixture: ComponentFixture<FeeFrequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeFrequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
