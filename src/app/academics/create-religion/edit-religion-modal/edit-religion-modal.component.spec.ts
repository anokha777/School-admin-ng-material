import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReligionModalComponent } from './edit-religion-modal.component';

describe('EditReligionModalComponent', () => {
  let component: EditReligionModalComponent;
  let fixture: ComponentFixture<EditReligionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReligionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReligionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
