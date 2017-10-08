import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { TransactionComponent } from './transaction.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { ApproveTransactionComponent } from './approve-transaction/approve-transaction.component';
import { BookTransactionComponent } from './book-transaction/book-transaction.component';
import { GenerateOtpTransactionComponent } from './generate-otp-transaction/generate-otp-transaction.component' ;
import { SubmitOtpTransactionComponent } from './submit-otp-transaction/submit-otp-transaction.component' ;
import { SuccessfulTransactionComponent } from './successful-transaction/successful-transaction.component';
import { FailedTransactionComponent } from './failed-transaction/failed-transaction.component';

const routes: Routes = Route.withShell([
  { path: 'transactions', component: TransactionComponent, data: { title: 'Trasaction' } },
  { path: 'transactions/:id', component: ShowTransactionComponent, data: { title: 'Show Trasaction' } },
  { path: 'transactions/:id/approve', component: ApproveTransactionComponent, data: { title: 'Approve Trasaction' } },
  { path: 'transactions/:id/reject', component: ApproveTransactionComponent, data: { title: 'Reject Trasaction' } },
  { path: 'transactions/:id/book', component: BookTransactionComponent, data: { title: 'Book Trasaction' } },
  // tslint:disable-next-line:max-line-length
  { path: 'transactions/:id/generate_otp', component: GenerateOtpTransactionComponent, data: { title: 'Generate OTP Trasaction' } },
  { path: 'transactions/:id/submit_otp', component: SubmitOtpTransactionComponent, data: { title: 'Submit Otp Trasaction' } },
  // tslint:disable-next-line:max-line-length
  { path: 'transactions/:id/successful', component: SuccessfulTransactionComponent, data: { title: 'Successful Otp Trasaction' } },
  { path: 'transactions/:id/failed', component: FailedTransactionComponent, data: { title: 'Failed Otp Trasaction' } },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TicketRoutingModule { }
