import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSectionComponent } from './create-section/create-section.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { LimitStudentsInSectionComponent } from './limit-students-in-section/limit-students-in-section.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CircularNoticeInformationPrintComponent } from './circular-notice-information-print/circular-notice-information-print.component';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { ViewTeacherTimetableComponent } from './view-teacher-timetable/view-teacher-timetable.component';
import { ViewClassTimetableComponent } from './view-class-timetable/view-class-timetable.component';
import { CreateClassTimetableComponent } from './create-class-timetable/create-class-timetable.component';
import { DefinePeriodComponent } from './define-period/define-period.component';
import { AllocateClassTeacherComponent } from './allocate-class-teacher/allocate-class-teacher.component';
import { AssignClassSubjectComponent } from './assign-class-subject/assign-class-subject.component';
import { CreateReligionComponent } from './create-religion/create-religion.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

const routes: Routes = [
  {path: 'create-academics-yr', component: CreateAcademicYearComponent},
  {path: 'create-section', component: CreateSectionComponent},
  {path: 'create-class', component: CreateClassComponent},
  {path: 'limit-section-student', component: LimitStudentsInSectionComponent},
  {path: 'create-subject', component: CreateSubjectComponent},
  {path: 'create-category', component: CreateCategoryComponent},
  {path: 'create-religion', component: CreateReligionComponent},
  {path: 'assign-class-subject', component: AssignClassSubjectComponent},
  {path: 'allocate-class-teacher', component: AllocateClassTeacherComponent},
  {path: 'define-period', component: DefinePeriodComponent},
  {path: 'create-class-timetable', component: CreateClassTimetableComponent},
  {path: 'view-class-timetable', component: ViewClassTimetableComponent},
  {path: 'view-teacher-timetable', component: ViewTeacherTimetableComponent},
  {path: 'create-notice', component: CreateNoticeComponent},
  {path: 'print-notice', component: CircularNoticeInformationPrintComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
