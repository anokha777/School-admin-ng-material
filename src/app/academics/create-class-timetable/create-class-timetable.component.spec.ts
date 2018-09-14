import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassTimetableComponent } from './create-class-timetable.component';

describe('CreateClassTimetableComponent', () => {
  let component: CreateClassTimetableComponent;
  let fixture: ComponentFixture<CreateClassTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClassTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
