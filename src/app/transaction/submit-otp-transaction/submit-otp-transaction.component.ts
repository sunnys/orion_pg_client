import { Component, OnInit, Input, Output } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

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
              private router: Router,
              private flashMessagesService: FlashMessagesService) {
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
            // this.router.navigate(['/transactions/' + this. transactionId + '/failed'], { replaceUrl: true });
            this.flashMessagesService.show('Some error occured!', {
              classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
              timeout: 5000, // Default is 3000
            });
          }
          this.retryCntr++;
        } else if (res.code === '200') {
          this.flashMessagesService.show('OTP verified!!', {
            classes: ['alert', 'alert-success'], // You can pass as many classes as you need
            timeout: 5000, // Default is 3000
          });
          this.router.navigate(['/transactions/' + this. transactionId + '/success'], { replaceUrl: true });
        }
      }
    }, (err: any) => {
      this.flashMessagesService.show('Some error occured!', {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 5000, // Default is 3000
      });
      this.error = err;
    });
  }

}
