import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulTransactionComponent } from './successful-transaction.component';

describe('SuccessfulTransactionComponent', () => {
  let component: SuccessfulTransactionComponent;
  let fixture: ComponentFixture<SuccessfulTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
