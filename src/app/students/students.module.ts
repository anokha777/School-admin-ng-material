import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { GenerateIdCardComponent } from './generate-id-card/generate-id-card.component';
import { ViewStudentRecordComponent } from './view-student-record/view-student-record.component';
import { ViewStudentAttendanceComponent } from './view-student-attendance/view-student-attendance.component';
import { StudentGuardianComponent } from './student-guardian/student-guardian.component';
import { StudentAttendanceReportComponent } from './student-attendance-report/student-attendance-report.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  declarations: [StudentAdmissionComponent, GenerateIdCardComponent, ViewStudentRecordComponent, ViewStudentAttendanceComponent, StudentGuardianComponent, StudentAttendanceReportComponent]
})
export class StudentsModule { }
