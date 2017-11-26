import { Component, OnInit, Input, Output } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-generate-otp-transaction',
  templateUrl: './generate-otp-transaction.component.html',
  styleUrls: ['./generate-otp-transaction.component.scss']
})
export class GenerateOtpTransactionComponent implements OnInit {
  error: string = null;
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

  generateOtp() {
    this.transactionService.generateOtpTransaction(this.transactionId)
    .finally(() => {
      console.log('C : ', 'Generate OTP');
    })
    .subscribe( (res: any) => {
      if (res) {
        this.flashMessagesService.show('Please enter the OTP, you will receive it on your registered email!', {
          classes: ['alert', 'alert-success'], // You can pass as many classes as you need
          timeout: 5000, // Default is 3000
        });
        this.router.navigate(['/transactions/' + this. transactionId + '/submit_otp'], { replaceUrl: true });
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
