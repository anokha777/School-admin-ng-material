import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDueReportComponent } from './fee-due-report.component';

describe('FeeDueReportComponent', () => {
  let component: FeeDueReportComponent;
  let fixture: ComponentFixture<FeeDueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeDueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeDueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
