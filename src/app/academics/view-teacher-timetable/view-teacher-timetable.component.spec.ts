import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherTimetableComponent } from './view-teacher-timetable.component';

describe('ViewTeacherTimetableComponent', () => {
  let component: ViewTeacherTimetableComponent;
  let fixture: ComponentFixture<ViewTeacherTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeacherTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
