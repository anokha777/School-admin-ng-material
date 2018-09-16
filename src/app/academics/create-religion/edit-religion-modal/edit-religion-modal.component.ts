import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-religion-modal',
  templateUrl: './edit-religion-modal.component.html',
  styleUrls: ['./edit-religion-modal.component.scss']
})
export class EditReligionModalComponent implements OnInit {
  form: FormGroup;
  id: number;
  religionName: string;
  religionCode: string;
  createDate: Date;
  updateDate: Date;
  createBy: string;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditReligionModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log('class data in modal component ====', data.row.name);
      this.id = data.row.id;
      this.religionName = data.row.name;
      this.religionCode = data.row.code;
      this.createDate = data.row.createDate;
      this.updateDate = new Date();
      this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      religionName: [this.religionName, Validators.required],
      religionCode: [this.religionCode, Validators.required],
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
