import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOtpTransactionComponent } from './submit-otp-transaction.component';

describe('SubmitOtpTransactionComponent', () => {
  let component: SubmitOtpTransactionComponent;
  let fixture: ComponentFixture<SubmitOtpTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitOtpTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitOtpTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
