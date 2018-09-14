import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { StudentReportComponent } from './student-report/student-report.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FeeDueReportComponent } from './fee-due-report/fee-due-report.component';
import { FeePaidReportComponent } from './fee-paid-report/fee-paid-report.component';
import { AbsenteeReportComponent } from './absentee-report/absentee-report.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [StudentReportComponent, StudentDetailsComponent, FeeDueReportComponent, FeePaidReportComponent, AbsenteeReportComponent]
})
export class ReportsModule { }
