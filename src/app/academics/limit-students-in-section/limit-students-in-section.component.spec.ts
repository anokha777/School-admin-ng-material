import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitStudentsInSectionComponent } from './limit-students-in-section.component';

describe('LimitStudentsInSectionComponent', () => {
  let component: LimitStudentsInSectionComponent;
  let fixture: ComponentFixture<LimitStudentsInSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitStudentsInSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitStudentsInSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
