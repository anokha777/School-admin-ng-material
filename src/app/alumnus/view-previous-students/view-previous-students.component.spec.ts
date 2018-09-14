import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreviousStudentsComponent } from './view-previous-students.component';

describe('ViewPreviousStudentsComponent', () => {
  let component: ViewPreviousStudentsComponent;
  let fixture: ComponentFixture<ViewPreviousStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreviousStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreviousStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
