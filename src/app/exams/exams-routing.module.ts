import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetTermComponent } from './set-term/set-term.component';
import { CreateSittingsComponent } from './create-sittings/create-sittings.component';
import { SetExamComponent } from './set-exam/set-exam.component';
import { UpdateExamMarksComponent } from './update-exam-marks/update-exam-marks.component';
import { GenerateReportCardComponent } from './generate-report-card/generate-report-card.component';

const routes: Routes = [
  {path: 'set-term', component: SetTermComponent},
  {path: 'create-sittings', component: CreateSittingsComponent},
  {path: 'set-exams', component: SetExamComponent},
  {path: 'update-exam-marks', component: UpdateExamMarksComponent},
  {path: 'generate-report-card', component: GenerateReportCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
