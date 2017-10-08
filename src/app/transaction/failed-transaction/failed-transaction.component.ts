import { Component, OnInit } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-failed-transaction',
  templateUrl: './failed-transaction.component.html',
  styleUrls: ['./failed-transaction.component.scss']
})
export class FailedTransactionComponent implements OnInit {
  transactionId: number;
  constructor(private transactionService: TransactionService, route: ActivatedRoute, router: Router) {
    this.transactionId = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
