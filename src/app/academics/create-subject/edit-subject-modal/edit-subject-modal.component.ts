import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-subject-modal',
  templateUrl: './edit-subject-modal.component.html',
  styleUrls: ['./edit-subject-modal.component.scss']
})
export class EditSubjectModalComponent implements OnInit {
  form: FormGroup;
  id: number;
  subjectName: string;
  subjectCode: string;
  createDate: Date;
  updateDate: Date;
  createBy: string;
  
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditSubjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log('class data in modal component ====', data.row.name);
      this.id = data.row.id;
      this.subjectName = data.row.name;
      this.subjectCode = data.row.code;
      this.createDate = data.row.createDate;
      this.updateDate = new Date();
      this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      subjectName: [this.subjectName, Validators.required],
      subjectCode: [this.subjectCode, Validators.required],
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
 