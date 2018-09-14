import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularNoticeInformationPrintComponent } from './circular-notice-information-print.component';

describe('CircularNoticeInformationPrintComponent', () => {
  let component: CircularNoticeInformationPrintComponent;
  let fixture: ComponentFixture<CircularNoticeInformationPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularNoticeInformationPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularNoticeInformationPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
