import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateClassTeacherComponent } from './allocate-class-teacher.component';

describe('AllocateClassTeacherComponent', () => {
  let component: AllocateClassTeacherComponent;
  let fixture: ComponentFixture<AllocateClassTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateClassTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateClassTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
