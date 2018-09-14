import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueOrReturnBookComponent } from './issue-or-return-book.component';

describe('IssueOrReturnBookComponent', () => {
  let component: IssueOrReturnBookComponent;
  let fixture: ComponentFixture<IssueOrReturnBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueOrReturnBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueOrReturnBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
