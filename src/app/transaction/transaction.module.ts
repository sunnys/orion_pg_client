import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { DataTableModule } from 'angular2-datatable';
import {NotificationsModule, NotificationsService} from 'angular4-notify';
import { FlashMessagesModule, FlashMessagesService } from 'ngx-flash-messages';
import { ApproveTransactionComponent } from './approve-transaction/approve-transaction.component';
import { BookTransactionComponent } from './book-transaction/book-transaction.component';
import { GenerateOtpTransactionComponent } from './generate-otp-transaction/generate-otp-transaction.component';
import { SuccessfulTransactionComponent } from './successful-transaction/successful-transaction.component';
import { FailedTransactionComponent } from './failed-transaction/failed-transaction.component';
import { SubmitOtpTransactionComponent } from './submit-otp-transaction/submit-otp-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    TicketRoutingModule,
    DataTableModule,
    NotificationsModule,
    FlashMessagesModule
  ],
  declarations: [
    TransactionComponent,
    ShowTransactionComponent,
    ApproveTransactionComponent,
    BookTransactionComponent,
    GenerateOtpTransactionComponent,
    SuccessfulTransactionComponent,
    FailedTransactionComponent,
    SubmitOtpTransactionComponent
  ],
  providers: [
    NotificationsService,
    FlashMessagesService
  ],
})
export class TransactionModule { }
