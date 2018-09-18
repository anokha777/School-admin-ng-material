import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLimitStudentModalComponent } from './edit-limit-student-modal.component';

describe('EditLimitStudentModalComponent', () => {
  let component: EditLimitStudentModalComponent;
  let fixture: ComponentFixture<EditLimitStudentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLimitStudentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLimitStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
