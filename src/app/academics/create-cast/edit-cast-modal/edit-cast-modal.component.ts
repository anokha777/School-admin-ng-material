import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReligionList, CastCategoryList } from '../../../static-data/temp-school-constant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-cast-modal',
  templateUrl: './edit-cast-modal.component.html',
  styleUrls: ['./edit-cast-modal.component.scss']
})
export class EditCastModalComponent implements OnInit {
  form: FormGroup;
  id: number;
  castName: string;
  castCategory: string;
  religionName: string;
  createDate: Date;
  updateDate: Date;
  createBy: string;

  castCategoryList: string[] = CastCategoryList;
  religionList: string[] = ReligionList;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCastModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log('class data in modal component ====', data.row.castName);
    this.id = data.row.id;
    this.castName = data.row.castName;
    this.castCategory = data.row.castCategory;
    this.religionName = data.row.religionName;
    this.createDate = data.row.createDate;
    this.updateDate = new Date();
    this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      castName: [this.castName, Validators.required],
      castCategory: [this.castCategory, Validators.required],
      religionName: [this.religionName, Validators.required],
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
