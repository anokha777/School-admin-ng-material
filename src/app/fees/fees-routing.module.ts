import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeFrequencyComponent } from './fee-frequency/fee-frequency.component';
import { FeeNameComponent } from './fee-name/fee-name.component';
import { ClassWiseFeeComponent } from './class-wise-fee/class-wise-fee.component';
import { FeeStatusCheckComponent } from './fee-status-check/fee-status-check.component';
import { FeePaymentsComponent } from './fee-payments/fee-payments.component';

const routes: Routes = [
  {path: 'fee-frequency', component: FeeFrequencyComponent},
  {path: 'fee-name', component: FeeNameComponent},
  {path: 'class-wise-fee', component: ClassWiseFeeComponent},
  {path: 'fee-status-check', component: FeeStatusCheckComponent},
  {path: 'fee-payments', component: FeePaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
