import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPreviousStudentsComponent } from './view-previous-students/view-previous-students.component';
import { ViewPreviousTeacherComponent } from './view-previous-teacher/view-previous-teacher.component';


const routes: Routes = [
  {path: 'view-previous-students', component: ViewPreviousStudentsComponent},
  {path: 'view-previous-teachers', component: ViewPreviousTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnusRoutingModule { }
