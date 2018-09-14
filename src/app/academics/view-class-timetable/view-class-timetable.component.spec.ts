import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassTimetableComponent } from './view-class-timetable.component';

describe('ViewClassTimetableComponent', () => {
  let component: ViewClassTimetableComponent;
  let fixture: ComponentFixture<ViewClassTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClassTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
