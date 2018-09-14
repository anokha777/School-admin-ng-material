import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {path: 'mail', component: MailComponent},
  {path: 'message', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailSmsRoutingModule { }
