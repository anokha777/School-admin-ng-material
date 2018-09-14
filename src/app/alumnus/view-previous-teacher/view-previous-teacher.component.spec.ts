import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreviousTeacherComponent } from './view-previous-teacher.component';

describe('ViewPreviousTeacherComponent', () => {
  let component: ViewPreviousTeacherComponent;
  let fixture: ComponentFixture<ViewPreviousTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreviousTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreviousTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
