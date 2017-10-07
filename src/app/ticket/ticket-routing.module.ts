import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { TicketComponent } from './ticket.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';

const routes: Routes = Route.withShell([
  { path: 'tickets', component: TicketComponent, data: { title: 'Ticket' } },
  { path: 'ticket/seach_ticket', component: SearchTicketComponent, data: { title: 'Search Ticket' } },
  { path: 'tickets/:id', component: ShowTicketComponent, data: { title: 'Search Ticket' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TicketRoutingModule { }
