import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { SetExamComponent } from './set-exam/set-exam.component';
import { CreateSittingsComponent } from './create-sittings/create-sittings.component';
import { SetTermComponent } from './set-term/set-term.component';
import { UpdateExamMarksComponent } from './update-exam-marks/update-exam-marks.component';
import { GenerateReportCardComponent } from './generate-report-card/generate-report-card.component';

@NgModule({
  imports: [
    CommonModule,
    ExamsRoutingModule
  ],
  declarations: [SetExamComponent, CreateSittingsComponent, SetTermComponent, UpdateExamMarksComponent, GenerateReportCardComponent]
})
export class ExamsModule { }
