import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactionId = '3';
  requestForApprovalPage = false;
  approvalPage = true;
  book = false;
  constructor() { }

  ngOnInit() {
  }

}
