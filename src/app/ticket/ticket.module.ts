import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DatePickerModule } from 'angular-io-datepicker';
import { OverlayModule } from 'angular-io-overlay';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { DataTableModule } from 'angular2-datatable';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    OverlayModule,
    DatePickerModule,
    DataTableModule,
    TicketRoutingModule
  ],
  declarations: [TicketComponent, SearchTicketComponent, ShowTicketComponent]
})
export class TicketModule { }
