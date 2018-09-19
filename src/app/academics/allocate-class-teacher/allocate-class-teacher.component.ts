import { Component, OnInit, ViewChild } from '@angular/core';
import { TeachersList, ClassNameList, SectionNameList } from '../../static-data/temp-school-constant';
import { AllocateClassTeacherModule } from './allocate-class-teacher.module';
import { msgCreateSuccessAllocateClassTeacher, savedNoting, msgCreateErrorAllocateClassTeacher, msgUpdateSuccessAllocateClassTeacher, msgUpdateErrorAllocateClassTeacher, msgDeleteSuccessAllocateClassTeacher, msgDeleteErrorAllocateClassTeacher, classTeacherAlreadyExists, successMsgDispDuration, errorMsgDispDuration } from '../../static-data/constants';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { AllocateClassTeacherUtil } from './allocate-class-teacher.util';

@Component({
  selector: 'app-allocate-class-teacher',
  templateUrl: './allocate-class-teacher.component.html',
  styleUrls: ['./allocate-class-teacher.component.scss']
})
export class AllocateClassTeacherComponent implements OnInit {
  teachersList: string[] = TeachersList;
  classNameList: string[] = ClassNameList;
  sectionNameList: string[] = SectionNameList;
  allocatedClassTeacherArray: AllocateClassTeacherModule[];
  msgCreateSuccessAllocateClassTeacher: string = msgCreateSuccessAllocateClassTeacher;
  msgCreateErrorAllocateClassTeacher: string = msgCreateErrorAllocateClassTeacher;
  msgUpdateSuccessAllocateClassTeacher: string = msgUpdateSuccessAllocateClassTeacher;
  msgUpdateErrorAllocateClassTeacher: string = msgUpdateErrorAllocateClassTeacher;
  savedNoting: string = savedNoting;
  msgDeleteSuccessAllocateClassTeacher: string = msgDeleteSuccessAllocateClassTeacher;
  msgDeleteErrorAllocateClassTeacher: string = msgDeleteErrorAllocateClassTeacher;
  classTeacherAlreadyExists: string = classTeacherAlreadyExists;
  successMsgDispDuration: number = successMsgDispDuration;
  errorMsgDispDuration: number = errorMsgDispDuration;

  model: AllocateClassTeacherModule = new AllocateClassTeacherModule(1, '', '', '', '', new Date(), new Date(), '');
  @ViewChild('addClassTeacherForm') addClassTeacherForm: NgForm;

  // table starts 
  displayedColumns: string[] = ['id', 'className', 'sectionName', 'classTeacherName', 'createDate', 'createBy', 'edit', 'delete'];

  dataSource: MatTableDataSource<AllocateClassTeacherModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private allocateClassTeacherUtil: AllocateClassTeacherUtil, public snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.allocatedClassTeacherArray = [
      new AllocateClassTeacherModule(1, 'LKG', 'Section A', 'Hemant Pathak', '2011', new Date(), new Date(), 'aAnokha'),
      new AllocateClassTeacherModule(2, 'UKG', 'Section B', 'Sanjay Pathak', '2012', new Date(), new Date(), 'bAnokha'),
      new AllocateClassTeacherModule(3, 'Class 1', 'Section C', 'Syam Sundar Singh', '2013', new Date(), new Date(), 'sAnokha'),
      new AllocateClassTeacherModule(4, 'Class 2', 'Section D', 'Sumant Pathak', '2014', new Date(), new Date(), 'dAnokha'),
      new AllocateClassTeacherModule(5, 'Class 3', 'Section C', 'Vinay', '2015', new Date(), new Date(), 'fAnokha'),
      new AllocateClassTeacherModule(6, 'Class 4', 'Section D', 'Shambhu Kumar', '2016', new Date(), new Date(), 'gAnokha'),
      new AllocateClassTeacherModule(7, 'Class 5', 'Section B', 'Ranjan Roy', '2017', new Date(), new Date(), 'hAnokha'),
      new AllocateClassTeacherModule(8, 'Class 6', 'Section B', 'Vikash', '2018', new Date(), new Date(), 'jAnokha'),
      new AllocateClassTeacherModule(9, 'Class 7', 'Section A', 'Ramesh', '2019', new Date(), new Date(), 'kAknokha'),
      new AllocateClassTeacherModule(10, 'Class 8', 'Section D', 'Mukesh', '2020', new Date(), new Date(), 'lAnokha'),
    ];

    this.putdataIntoDataSource(this.allocatedClassTeacherArray);
  }

  putdataIntoDataSource(allocatedClassTeacherArray: AllocateClassTeacherModule[]) {
    this.dataSource = new MatTableDataSource(allocatedClassTeacherArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
