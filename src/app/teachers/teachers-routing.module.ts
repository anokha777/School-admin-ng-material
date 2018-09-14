import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AttedenceTeacherComponent } from './attedence-teacher/attedence-teacher.component';
import { ViewTeacherAttendanceComponent } from './view-teacher-attendance/view-teacher-attendance.component';
import { TeacherPaymentComponent } from './teacher-payment/teacher-payment.component';

const routes: Routes = [
  {path: 'add-teacher', component: AddTeacherComponent},
  {path: 'view-teacher', component: ViewTeacherComponent},
  {path: 'attedence-teacher', component: AttedenceTeacherComponent},
  {path: 'view-teacher-attendance', component: ViewTeacherAttendanceComponent},
  {path: 'teacher-payment', component: TeacherPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
