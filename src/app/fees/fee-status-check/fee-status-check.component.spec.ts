import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeStatusCheckComponent } from './fee-status-check.component';

describe('FeeStatusCheckComponent', () => {
  let component: FeeStatusCheckComponent;
  let fixture: ComponentFixture<FeeStatusCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeStatusCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeStatusCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
