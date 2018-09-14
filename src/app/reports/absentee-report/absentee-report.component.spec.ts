import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenteeReportComponent } from './absentee-report.component';

describe('AbsenteeReportComponent', () => {
  let component: AbsenteeReportComponent;
  let fixture: ComponentFixture<AbsenteeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenteeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenteeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
