import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePaymentsComponent } from './fee-payments.component';

describe('FeePaymentsComponent', () => {
  let component: FeePaymentsComponent;
  let fixture: ComponentFixture<FeePaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeePaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
