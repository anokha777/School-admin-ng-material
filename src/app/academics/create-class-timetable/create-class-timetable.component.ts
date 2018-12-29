import { Component, OnInit, ViewChild } from '@angular/core';
import { msgCreateSuccessClassTimetable, msgCreateErrorClassTimetable, msgUpdateSuccessClassTimetable, msgUpdateErrorClassTimetable, classTimetableAlreadyExists, msgDeleteErrorClassTimetable, msgDeleteSuccessClassTimetable, savedNoting, successMsgDispDuration, errorMsgDispDuration } from '../../static-data/constants';
import { SectionNameList, ClassNameList } from '../../static-data/temp-school-constant';
import { CreateClassTimetableModule } from './create-class-timetable.nodule';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { CreateClassTimetableUtil } from './create-class-timetable.util';

@Component({
  selector: 'app-create-class-timetable',
  templateUrl: './create-class-timetable.component.html',
  styleUrls: ['./create-class-timetable.component.scss']
})
export class CreateClassTimetableComponent implements OnInit {
  classTimetableArray: CreateClassTimetableModule[];
  classNameList: string[] = ClassNameList;
  sectionNameList: string[] = SectionNameList;
  msgCreateSuccessClassTimetable: string = msgCreateSuccessClassTimetable;
  msgCreateErrorClassTimetable: string = msgCreateErrorClassTimetable;
  msgUpdateSuccessClassTimetable: string = msgUpdateSuccessClassTimetable;
  msgUpdateErrorClassTimetable: string = msgUpdateErrorClassTimetable;
  msgDeleteSuccessClassTimetable: string = msgDeleteSuccessClassTimetable;
  msgDeleteErrorClassTimetable: string = msgDeleteErrorClassTimetable;
  classTimetableAlreadyExists: string = classTimetableAlreadyExists;
  savedNoting: string = savedNoting;
  successMsgDispDuration: number = successMsgDispDuration;
  errorMsgDispDuration: number = errorMsgDispDuration;

  model: CreateClassTimetableModule = new CreateClassTimetableModule(0, '', '', '', '', '', '', '', '', new Date(), new Date(), '');
  @ViewChild('classTimetableForm') classTimetableForm: NgForm;

  // table starts 
  displayedColumns: string[] = ['id', 'className', 'sectionName', 'subjectName', 'teacherName', 'teacherImgUrl', 'periodStartTime', 'periodEndTime', 'periodName', 'createDate', 'createBy', 'edit', 'delete'];

  dataSource: MatTableDataSource<CreateClassTimetableModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private dialog: MatDialog, private createClassTimetableUtil: CreateClassTimetableUtil, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
