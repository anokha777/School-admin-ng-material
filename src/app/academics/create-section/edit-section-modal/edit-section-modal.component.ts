import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-section-modal',
  templateUrl: './edit-section-modal.component.html',
  styleUrls: ['./edit-section-modal.component.scss']
})
export class EditSectionModalComponent implements OnInit {
  form: FormGroup;
  id: number;
  sectionName: string;
  sectionCode: string;
  createDate: Date;
  updateDate: Date;
  createBy: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditSectionModalComponent>,
    // @Inject(MAT_DIALOG_DATA) { id, name, code, createDate, createBy }: Section) {
    @Inject(MAT_DIALOG_DATA) data) {
      console.log('data====', data.row.name);
      this.id = data.row.id;
      this.sectionName = data.row.name;
      this.sectionCode = data.row.code;
      this.createDate = data.row.createDate;
      this.updateDate = new Date();
      this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      sectionName: [this.sectionName, Validators.required],
      sectionCode: [this.sectionCode, Validators.required],
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
