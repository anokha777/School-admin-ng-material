import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSittingsComponent } from './create-sittings.component';

describe('CreateSittingsComponent', () => {
  let component: CreateSittingsComponent;
  let fixture: ComponentFixture<CreateSittingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSittingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
