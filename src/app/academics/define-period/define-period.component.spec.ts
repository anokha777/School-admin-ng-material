import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinePeriodComponent } from './define-period.component';

describe('DefinePeriodComponent', () => {
  let component: DefinePeriodComponent;
  let fixture: ComponentFixture<DefinePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
