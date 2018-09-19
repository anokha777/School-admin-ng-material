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
  
  constructor() { }

  ngOnInit() {
  }

}
