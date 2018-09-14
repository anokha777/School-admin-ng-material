import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttedenceTeacherComponent } from './attedence-teacher.component';

describe('AttedenceTeacherComponent', () => {
  let component: AttedenceTeacherComponent;
  let fixture: ComponentFixture<AttedenceTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttedenceTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttedenceTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
