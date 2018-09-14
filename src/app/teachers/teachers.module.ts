import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AttedenceTeacherComponent } from './attedence-teacher/attedence-teacher.component';
import { ViewTeacherAttendanceComponent } from './view-teacher-attendance/view-teacher-attendance.component';
import { TeacherPaymentComponent } from './teacher-payment/teacher-payment.component';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule
  ],
  declarations: [AddTeacherComponent, ViewTeacherComponent, AttedenceTeacherComponent, ViewTeacherAttendanceComponent, TeacherPaymentComponent]
})
export class TeachersModule { }
