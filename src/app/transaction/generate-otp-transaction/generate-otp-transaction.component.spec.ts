import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOtpTransactionComponent } from './generate-otp-transaction.component';

describe('GenerateOtpTransactionComponent', () => {
  let component: GenerateOtpTransactionComponent;
  let fixture: ComponentFixture<GenerateOtpTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateOtpTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOtpTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
