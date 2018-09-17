import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FullMonthName } from '../../../static-data/months';

@Component({
  selector: 'app-edit-academic-year-modal',
  templateUrl: './edit-academic-year-modal.component.html',
  styleUrls: ['./edit-academic-year-modal.component.scss']
})
export class EditAcademicYearModalComponent implements OnInit {
  form: FormGroup; 
  id: number;
  academicMonthStart: string;
  academicYearStart: string;
  academicMonthEnd: string;
  academicYearEnd: string;
  createDate: Date;
  updateDate: Date;
  createBy: string;

  fullMonthName: string[] = FullMonthName;
  
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditAcademicYearModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      console.log('class data in modal component ====', data.row.name);
      this.id = data.row.id;
      this.academicMonthStart = data.row.academicMonthStart;
      this.academicYearStart = data.row.academicYearStart;
      this.academicMonthEnd = data.row.academicMonthEnd;
      this.academicYearEnd = data.row.academicYearEnd;
      this.createDate = data.row.createDate;
      this.updateDate = new Date();
      this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      academicMonthStart: [this.academicMonthStart, Validators.required],
      academicYearStart: [this.academicYearStart, Validators.required],
      academicMonthEnd: [this.academicMonthEnd, Validators.required],
      academicYearEnd: [this.academicYearEnd, Validators.required],
      createDate: [this.createDate],
      updateDate: [this.updateDate],
      createBy: [this.createBy],
    });
    }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
