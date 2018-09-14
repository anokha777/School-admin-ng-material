import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignClassSubjectComponent } from './assign-class-subject.component';

describe('AssignClassSubjectComponent', () => {
  let component: AssignClassSubjectComponent;
  let fixture: ComponentFixture<AssignClassSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignClassSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignClassSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
