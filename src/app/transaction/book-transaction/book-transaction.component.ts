import { Component, OnInit } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-transaction',
  templateUrl: './book-transaction.component.html',
  styleUrls: ['./book-transaction.component.scss']
})
export class BookTransactionComponent implements OnInit {
  transactionId: number;
  requestForApprovalPage = false;
  approvalPage = false;
  book = true;

  constructor(private transactionService: TransactionService, route: ActivatedRoute, router: Router) {
    this.transactionId = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
