import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePaidReportComponent } from './fee-paid-report.component';

describe('FeePaidReportComponent', () => {
  let component: FeePaidReportComponent;
  let fixture: ComponentFixture<FeePaidReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeePaidReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeePaidReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
