import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeNameComponent } from './fee-name.component';

describe('FeeNameComponent', () => {
  let component: FeeNameComponent;
  let fixture: ComponentFixture<FeeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
