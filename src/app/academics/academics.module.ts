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
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'


import { 
			MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
			MatIconModule,} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {  ReactiveFormsModule } from '@angular/forms';

import { FormsModule }   from '@angular/forms';
import { EditSectionModalComponent } from './create-section/edit-section-modal/edit-section-modal.component';
import { EditClassModalComponent } from './create-class/edit-class-modal/edit-class-modal.component';
import { EditSubjectModalComponent } from './create-subject/edit-subject-modal/edit-subject-modal.component';
import { EditCategoryModalComponent } from './create-category/edit-category-modal/edit-category-modal.component';
import { EditReligionModalComponent } from './create-religion/edit-religion-modal/edit-religion-modal.component';
import { EditAcademicYearModalComponent } from './create-academic-year/edit-academic-year-modal/edit-academic-year-modal.component';
import { EditLimitStudentModalComponent } from './limit-students-in-section/edit-limit-student-modal/edit-limit-student-modal.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { EditCastModalComponent } from './create-cast/edit-cast-modal/edit-cast-modal.component';
import { OnlyNumberDirective } from '../directive/only-number.directive';
import { EditClassSubjectModalComponent } from './assign-class-subject/edit-class-subject-modal/edit-class-subject-modal.component';
import { EditClassTeacherModalComponent } from './allocate-class-teacher/edit-class-teacher-modal/edit-class-teacher-modal.component';
import { EditClassPeriodModalComponent } from './define-period/edit-class-period-modal/edit-class-period-modal.component';


@NgModule({
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    CreateSectionComponent, 
    CreateAcademicYearComponent, 
    CreateClassComponent, 
    LimitStudentsInSectionComponent, 
    CreateSubjectComponent, 
    CreateCategoryComponent, 
    CreateReligionComponent, 
    AssignClassSubjectComponent, 
    AllocateClassTeacherComponent, 
    DefinePeriodComponent, 
    CreateClassTimetableComponent, 
    ViewClassTimetableComponent, 
    ViewTeacherTimetableComponent, 
    CreateNoticeComponent, 
    CircularNoticeInformationPrintComponent, 
    EditSectionModalComponent, 
    EditClassModalComponent, 
    EditSubjectModalComponent,
    EditCategoryModalComponent,
    EditReligionModalComponent,
    EditAcademicYearModalComponent,
    EditLimitStudentModalComponent,
    EditCastModalComponent,
    EditClassSubjectModalComponent,
    OnlyNumberDirective,
    CreateCastComponent,
    EditClassSubjectModalComponent,
    EditClassTeacherModalComponent,
    EditClassPeriodModalComponent
  ],
  entryComponents: [ 
    EditSectionModalComponent, 
    EditClassModalComponent, 
    EditSubjectModalComponent,
    EditCategoryModalComponent,
    EditReligionModalComponent,
    EditAcademicYearModalComponent,
    EditLimitStudentModalComponent,
    EditCastModalComponent,
    EditClassSubjectModalComponent,
    EditClassTeacherModalComponent ]
})
export class AcademicsModule { }
