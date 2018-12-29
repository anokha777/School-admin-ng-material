import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassPeriodModalComponent } from './edit-class-period-modal.component';

describe('EditClassPeriodModalComponent', () => {
  let component: EditClassPeriodModalComponent;
  let fixture: ComponentFixture<EditClassPeriodModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassPeriodModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassPeriodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
