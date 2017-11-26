import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { DataTableModule } from 'angular2-datatable';

import {NotificationsModule, NotificationsService} from 'angular4-notify';
import { FlashMessagesModule, FlashMessagesService } from 'ngx-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    NotificationsModule,
    DataTableModule,
    FlashMessagesModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService,
    NotificationsService,
    FlashMessagesService
  ]
})
export class HomeModule { }
