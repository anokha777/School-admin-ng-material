import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTermComponent } from './set-term.component';

describe('SetTermComponent', () => {
  let component: SetTermComponent;
  let fixture: ComponentFixture<SetTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
