import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademicYearModalComponent } from './edit-academic-year-modal.component';

describe('EditAcademicYearModalComponent', () => {
  let component: EditAcademicYearModalComponent;
  let fixture: ComponentFixture<EditAcademicYearModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcademicYearModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcademicYearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
