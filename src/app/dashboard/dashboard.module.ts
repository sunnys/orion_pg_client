import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlashMessagesModule, FlashMessagesService } from 'ngx-flash-messages';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DashboardRoutingModule,
    FlashMessagesModule
  ],
  declarations: [DashboardComponent],
  providers: [
    FlashMessagesService
  ]
})
export class DashboardModule { }
