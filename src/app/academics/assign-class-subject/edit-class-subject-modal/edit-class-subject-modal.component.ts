import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SubjectList, ClassNameList } from '../../../static-data/temp-school-constant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-class-subject-modal',
  templateUrl: './edit-class-subject-modal.component.html',
  styleUrls: ['./edit-class-subject-modal.component.scss']
})
export class EditClassSubjectModalComponent implements OnInit {
  form: FormGroup; 
  id: number;
  className: string;
  subjectsName: string[];
  createDate: Date;
  updateDate: Date;
  createBy: string;
  classNameList: string[] = ClassNameList;
  subjectList: string[] = SubjectList;

  subject = new FormControl();

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditClassSubjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log('class data in modal component ====', data.row.name);
      this.id = data.row.id;
      this.className = data.row.className;
      this.subjectsName = data.row.subjectsName;
      this.createDate = data.row.createDate;
      this.updateDate = new Date();
      this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      className: [this.className, Validators.required],
      subjectsName: [this.subjectsName, Validators.required],
      createDate: [this.createDate],
      updateDate: [this.updateDate],
      createBy: [this.createBy],
    });
    }
// [formControl]="subject" 
  ngOnInit() {
  }

  save() {
    this.form.value.subjectsName = this.subject.value;
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
 
}
