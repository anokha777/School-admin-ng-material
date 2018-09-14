import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentReportComponent } from './student-report/student-report.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FeeDueReportComponent } from './fee-due-report/fee-due-report.component';
import { FeePaidReportComponent } from './fee-paid-report/fee-paid-report.component';
import { AbsenteeReportComponent } from './absentee-report/absentee-report.component';

const routes: Routes = [
  {path: 'student-report', component: StudentReportComponent},
  {path: 'student-details', component: StudentDetailsComponent},
  {path: 'fee-due-report', component: FeeDueReportComponent},
  {path: 'fee-paid-report', component: FeePaidReportComponent},
  {path: 'absentee-report', component: AbsenteeReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
