import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSmsRoutingModule } from './email-sms-routing.module';
import { MailComponent } from './mail/mail.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    EmailSmsRoutingModule
  ],
  declarations: [MailComponent, MessageComponent]
})
export class EmailSmsModule { }
