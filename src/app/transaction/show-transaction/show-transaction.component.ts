import { Component, OnInit, Input, Output } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationsService} from 'angular4-notify';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.scss']
})
export class ShowTransactionComponent implements OnInit {
  error: string = null;
  @Input() transactionId: string;
  @Input() requestForApprovalPage = true;
  @Input() approvalPage = false;
  @Input() book = false;
  private transact: any;

  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute,
              private router: Router,
              protected notificationsService: NotificationsService,
              private flashMessagesService: FlashMessagesService) {
    this.transactionId = route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.fetchTransaction(this.transactionId.toString()).subscribe(transact => {
      console.log(transact);
      // this.notificationsService.addError('Error message here');
      this.transact = transact;
    });
  }

  public fetchTransaction(tId: string): Observable<any> {
    return this.transactionService.showTransaction(tId);
  }

  requestForApproval() {
    this.transactionService.requestForApprovalTransaction(this.transactionId)
    .finally(() => {
      console.log('C : ', 'Some execution');
    })
    .subscribe( (res: any) => {
      if (res) {
        this.flashMessagesService.show('Request submitted you will receive email for further operations!', {
          classes: ['alert', 'alert-success'], // You can pass as many classes as you need
          timeout: 5000, // Default is 3000
        });
        this.router.navigate(['/'], { replaceUrl: true });
      }
    }, (err: any) => {
      this.flashMessagesService.show('Some error occured!', {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 5000, // Default is 3000
      });
      this.error = err;
    });
  }

  approveTransaction() {
    this.transactionService.approveTransaction(this.transactionId)
    .finally(() => {
      console.log('C: ', 'Approving Transaction');
    })
    .subscribe( (res: any) => {
      if (res) {
        this.flashMessagesService.show('Transaction approved!', {
          classes: ['alert', 'alert-success'], // You can pass as many classes as you need
          timeout: 5000, // Default is 3000
        });
        this.router.navigate(['/'], { replaceUrl: true });
      }
    }, (err: any) => {
      this.flashMessagesService.show('Some error occured!', {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 5000, // Default is 3000
      });
      this.error = err;
    });
  }

  rejectTransaction() {
    this.transactionService.rejectTransaction(this.transactionId)
    .finally(() => {
      console.log('C: ', 'Rejecting Transaction');
      this.router.navigate(['/'], { replaceUrl: true });
    })
    .subscribe( (res: any) => {
      if (res) {
        this.flashMessagesService.show('Transaction rejected!', {
          classes: ['alert', 'alert-success'], // You can pass as many classes as you need
          timeout: 5000, // Default is 3000
        });
        this.router.navigate(['/'], { replaceUrl: true });
      }
    }, (err: any) => {
      this.flashMessagesService.show('Some error occured!', {
        classes: ['alert', 'alert-danger'], // You can pass as many classes as you need
        timeout: 5000, // Default is 3000
      });
      this.error = err;
    });
  }

  bookTransaction() {
    this.transactionService.bookTransaction(this.transactionId)
    .finally(() => {
      console.log('C: ', 'Rejecting Transaction');
    })
    .subscribe( (res: any) => {
      if (res) {
        this.router.navigate(['/transactions/' + this.transactionId + '/generate_otp'], { replaceUrl: true });
      }
    }, (err: any) => {
      this.error = err;
    });
  }
}
