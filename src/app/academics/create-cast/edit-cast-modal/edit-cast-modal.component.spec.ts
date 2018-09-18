import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCastModalComponent } from './edit-cast-modal.component';

describe('EditCastModalComponent', () => {
  let component: EditCastModalComponent;
  let fixture: ComponentFixture<EditCastModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCastModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCastModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
