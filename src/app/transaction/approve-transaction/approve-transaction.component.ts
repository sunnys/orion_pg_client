import { Component, OnInit } from '@angular/core';
import { TransactionService } from './../transaction.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-approve-transaction',
  templateUrl: './approve-transaction.component.html',
  styleUrls: ['./approve-transaction.component.scss']
})
export class ApproveTransactionComponent implements OnInit {
  transactionId: number;
  requestForApprovalPage = false;
  approvalPage = true;
  book = false;

  constructor(private transactionService: TransactionService, route: ActivatedRoute, router: Router) {
    this.transactionId = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
