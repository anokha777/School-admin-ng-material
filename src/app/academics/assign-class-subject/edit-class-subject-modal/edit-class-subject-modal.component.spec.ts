import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassSubjectModalComponent } from './edit-class-subject-modal.component';

describe('EditClassSubjectModalComponent', () => {
  let component: EditClassSubjectModalComponent;
  let fixture: ComponentFixture<EditClassSubjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassSubjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassSubjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
