import { Component, OnInit, Input, Output } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-submit-otp-transaction',
  templateUrl: './submit-otp-transaction.component.html',
  styleUrls: ['./submit-otp-transaction.component.scss']
})
export class SubmitOtpTransactionComponent implements OnInit {
  error: string = null;
  otp: string = null;
  retryCntr = 0;
  @Input() transactionId: string;
  @Input() requestForApprovalPage = false;
  @Input() approvalPage = false;
  @Input() book = false;
  private transact: any;

  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute,
              private router: Router) {
    this.transactionId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchTransaction(this.transactionId.toString()).subscribe(transact => {
      console.log(transact);
      this.transact = transact;
    });
  }

  public fetchTransaction(tId: string): Observable<any> {
    return this.transactionService.showTransaction(tId);
  }

  submitOtp(otp: string) {
    this.transactionService.submitOtpTransaction(this.transactionId, otp)
    .finally(() => {
      console.log('C : ', 'Generate OTP');
    })
    .subscribe( (res: any) => {
      if (res) {
        console.log(res.code);
        if (res.code === '401') {
          console.log('Retry');
          if ( this.retryCntr > 3 ) {
            this.router.navigate(['/transactions/' + this. transactionId + '/failed'], { replaceUrl: true });
          }
          this.retryCntr++;
        } else if (res.code === '200') {
          this.router.navigate(['/transactions/' + this. transactionId + '/success'], { replaceUrl: true });
        }
      }
    }, (err: any) => {
      this.error = err;
    });
  }

}
