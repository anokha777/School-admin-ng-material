import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { CreateSectionComponent } from './create-section/create-section.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { LimitStudentsInSectionComponent } from './limit-students-in-section/limit-students-in-section.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateReligionComponent } from './create-religion/create-religion.component';
import { AssignClassSubjectComponent } from './assign-class-subject/assign-class-subject.component';
import { AllocateClassTeacherComponent } from './allocate-class-teacher/allocate-class-teacher.component';
import { DefinePeriodComponent } from './define-period/define-period.component';
import { CreateClassTimetableComponent } from './create-class-timetable/create-class-timetable.component';
import { ViewClassTimetableComponent } from './view-class-timetable/view-class-timetable.component';
import { ViewTeacherTimetableComponent } from './view-teacher-timetable/view-teacher-timetable.component';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { CircularNoticeInformationPrintComponent } from './circular-notice-information-print/circular-notice-information-print.component';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [CreateSectionComponent, CreateAcademicYearComponent, CreateClassComponent, LimitStudentsInSectionComponent, CreateSubjectComponent, CreateCategoryComponent, CreateReligionComponent, AssignClassSubjectComponent, AllocateClassTeacherComponent, DefinePeriodComponent, CreateClassTimetableComponent, ViewClassTimetableComponent, ViewTeacherTimetableComponent, CreateNoticeComponent, CircularNoticeInformationPrintComponent]
})
export class AcademicsModule { }
