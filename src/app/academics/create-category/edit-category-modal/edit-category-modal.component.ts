import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrls: ['./edit-category-modal.component.scss']
})
export class EditCategoryModalComponent implements OnInit {
  form: FormGroup;
  id: number;
  categoryName: string;
  categoryCode: string;
  createDate: Date;
  updateDate: Date;
  createBy: string;
  
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      console.log('class data in modal component ====', data.row.name);
      this.id = data.row.id;
      this.categoryName = data.row.name;
      this.categoryCode = data.row.code;
      this.createDate = data.row.createDate;
      this.updateDate = new Date();
      this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      categoryName: [this.categoryName, Validators.required],
      categoryCode: [this.categoryCode, Validators.required],
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
