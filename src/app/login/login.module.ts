import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule, FlashMessagesService } from 'ngx-flash-messages';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    LoginRoutingModule,
    FlashMessagesModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    FlashMessagesService
  ]
})
export class LoginModule { }
