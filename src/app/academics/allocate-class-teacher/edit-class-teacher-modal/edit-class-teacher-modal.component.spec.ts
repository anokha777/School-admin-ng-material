import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassTeacherModalComponent } from './edit-class-teacher-modal.component';

describe('EditClassTeacherModalComponent', () => {
  let component: EditClassTeacherModalComponent;
  let fixture: ComponentFixture<EditClassTeacherModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassTeacherModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassTeacherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
