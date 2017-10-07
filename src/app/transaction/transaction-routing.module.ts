import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { TransactionComponent } from './transaction.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { ApproveTransactionComponent } from './approve-transaction/approve-transaction.component';
import { BookTransactionComponent } from './book-transaction/book-transaction.component';

const routes: Routes = Route.withShell([
  { path: 'transactions', component: TransactionComponent, data: { title: 'Trasaction' } },
  { path: 'transactions/:id', component: ShowTransactionComponent, data: { title: 'Show Trasaction' } },
  { path: 'transactions/:id/approve', component: ApproveTransactionComponent, data: { title: 'Show Trasaction' } },
  { path: 'transactions/:id/reject', component: ApproveTransactionComponent, data: { title: 'Show Trasaction' } },
  { path: 'transactions/:id/book', component: BookTransactionComponent, data: { title: 'Show Trasaction' } },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TicketRoutingModule { }
