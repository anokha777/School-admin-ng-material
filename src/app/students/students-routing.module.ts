import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { GenerateIdCardComponent } from './generate-id-card/generate-id-card.component';
import { ViewStudentRecordComponent } from './view-student-record/view-student-record.component';
import { ViewStudentAttendanceComponent } from './view-student-attendance/view-student-attendance.component';
import { StudentGuardianComponent } from './student-guardian/student-guardian.component';
import { StudentAttendanceReportComponent } from './student-attendance-report/student-attendance-report.component';

const routes: Routes = [
  {path: 'student-admission', component: StudentAdmissionComponent},
  {path: 'generate-id-card', component: GenerateIdCardComponent},
  {path: 'view-student-record', component: ViewStudentRecordComponent},
  {path: 'view-student-attendance', component: ViewStudentAttendanceComponent},
  {path: 'student-guardian', component: StudentGuardianComponent},
  {path: 'student-attendance-report', component: StudentAttendanceReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

