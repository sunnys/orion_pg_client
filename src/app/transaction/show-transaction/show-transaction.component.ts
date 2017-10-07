import { Component, OnInit, Input, Output } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.scss']
})
export class ShowTransactionComponent implements OnInit {
  @Input() transactionId: number;
  @Input() requestForApprovalPage = true;
  @Input() approvalPage = false;
  @Input() book = false;
  private transact: any;

  constructor(private transactionService: TransactionService, route: ActivatedRoute, router: Router) {
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

}
