import { Component, OnInit, Input, Output } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

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

  generateOtp() {
    this.transactionService.generateOtpTransaction(this.transactionId)
    .finally(() => {
      console.log('C : ', 'Generate OTP');
    })
    .subscribe( (res: any) => {
      if (res) {
        this.router.navigate(['/transactions/' + this. transactionId + '/submit_otp'], { replaceUrl: true });
      }
    }, (err: any) => {
      this.error = err;
    });
  }
}
