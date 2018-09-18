import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassNameList, SectionNameList } from '../../../static-data/temp-school-constant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-limit-student-modal',
  templateUrl: './edit-limit-student-modal.component.html',
  styleUrls: ['./edit-limit-student-modal.component.scss']
})
export class EditLimitStudentModalComponent implements OnInit {

  form: FormGroup; 
  id: number;
  className: string;
  sectionName: string;
  limitBoyNumber: number;
  limitGirlNumber: number;
  admittedBoy: number;
  admittedGirl: number;
  createDate: Date;
  updateDate: Date;
  createBy: string;

  classNameList: string[] = ClassNameList;
  sectionNameList: string[] = SectionNameList;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditLimitStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log('class data in modal component ====', data.row.className);
      this.id = data.row.id;
      this.className = data.row.className;
      this.sectionName = data.row.sectionName;
      this.limitBoyNumber = data.row.limitBoyNumber;
      this.limitGirlNumber = data.row.limitGirlNumber;
      this.createDate = data.row.createDate;
      this.updateDate = new Date();
      this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      className: [this.className, Validators.required],
      sectionName: [this.sectionName, Validators.required],
      limitBoyNumber: [this.limitBoyNumber, Validators.required],
      limitGirlNumber: [this.limitGirlNumber, Validators.required],
      createDate: [this.createDate],
      updateDate: new Date(),
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
