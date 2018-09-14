import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamMarksComponent } from './update-exam-marks.component';

describe('UpdateExamMarksComponent', () => {
  let component: UpdateExamMarksComponent;
  let fixture: ComponentFixture<UpdateExamMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExamMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
