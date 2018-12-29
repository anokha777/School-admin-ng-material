<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClassNameList, SectionNameList, TeachersList } from '../../../static-data/temp-school-constant';

@Component({
  selector: 'app-edit-class-teacher-modal',
  templateUrl: './edit-class-teacher-modal.component.html',
  styleUrls: ['./edit-class-teacher-modal.component.scss']
})
export class EditClassTeacherModalComponent implements OnInit {
  form: FormGroup;
  id: number;
  className: string;
  subjectsName: string[];
  createDate: Date;
  updateDate: Date;
  createBy: string;
  classNameList: string[] = ClassNameList;
  sectionNameList: string[] = SectionNameList;
  teachersList: string[] = TeachersList;
  subject: any;

  constructor() { }

  ngOnInit() {
  }

  close() {}

  save() {}

}
=======
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassNameList, SectionNameList, TeachersList } from '../../../static-data/temp-school-constant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-class-teacher-modal',
  templateUrl: './edit-class-teacher-modal.component.html',
  styleUrls: ['./edit-class-teacher-modal.component.scss']
})
export class EditClassTeacherModalComponent implements OnInit {
  form: FormGroup;
  id: number;
  className: string;
  sectionName: string;
  classTeacherName: string;
  classTeacherImgUrl: string;
  createDate: Date;
  updateDate: Date;
  createBy: string;

  classNameList: string[] = ClassNameList;
  sectionNameList: string[] = SectionNameList;
  teachersList: string[] = TeachersList;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditClassTeacherModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log('class data in modal component ====', data.row.classTeacherName);
    this.id = data.row.id;
    this.className = data.row.className;
    this.sectionName = data.row.sectionName;
    this.classTeacherName = data.row.classTeacherName;
    this.classTeacherImgUrl = data.row.classTeacherImgUrl;
    this.createDate = data.row.createDate;
    this.updateDate = new Date();
    this.createBy = data.row.createBy;

    this.form = fb.group({
      id: [this.id],
      className: [this.className, Validators.required],
      sectionName: [this.sectionName, Validators.required],
      classTeacherName: [this.classTeacherName, Validators.required],
      classTeacherImgUrl: [this.classTeacherImgUrl, Validators.required],
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
>>>>>>> 79483174963e406c9cb26699bf758b61d6d4ca98
