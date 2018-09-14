import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnusRoutingModule } from './alumnus-routing.module';
import { ViewPreviousStudentsComponent } from './view-previous-students/view-previous-students.component';
import { ViewPreviousTeacherComponent } from './view-previous-teacher/view-previous-teacher.component';

@NgModule({
  imports: [
    CommonModule,
    AlumnusRoutingModule
  ],
  declarations: [ViewPreviousStudentsComponent, ViewPreviousTeacherComponent]
})
export class AlumnusModule { }
