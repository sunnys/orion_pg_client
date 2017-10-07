import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { DataTableModule } from 'angular2-datatable';
import { ApproveTransactionComponent } from './approve-transaction/approve-transaction.component';
import { BookTransactionComponent } from './book-transaction/book-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    TicketRoutingModule,
    DataTableModule
  ],
  declarations: [TransactionComponent, ShowTransactionComponent, ApproveTransactionComponent, BookTransactionComponent]
})
export class TransactionModule { }
