import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { FeeFrequencyComponent } from './fee-frequency/fee-frequency.component';
import { FeeNameComponent } from './fee-name/fee-name.component';
import { ClassWiseFeeComponent } from './class-wise-fee/class-wise-fee.component';
import { FeeStatusCheckComponent } from './fee-status-check/fee-status-check.component';
import { FeePaymentsComponent } from './fee-payments/fee-payments.component';

@NgModule({
  imports: [
    CommonModule,
    FeesRoutingModule
  ],
  declarations: [FeeFrequencyComponent, FeeNameComponent, ClassWiseFeeComponent, FeeStatusCheckComponent, FeePaymentsComponent]
})
export class FeesModule { }
