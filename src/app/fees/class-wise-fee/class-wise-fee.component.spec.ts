import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWiseFeeComponent } from './class-wise-fee.component';

describe('ClassWiseFeeComponent', () => {
  let component: ClassWiseFeeComponent;
  let fixture: ComponentFixture<ClassWiseFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassWiseFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassWiseFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
