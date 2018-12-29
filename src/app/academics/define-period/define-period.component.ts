import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassPeriodModule } from './class-period.module';
import { msgCreateSuccessClassPeriod, msgCreateErrorClassPeriod, msgUpdateSuccessClassPeriod, msgUpdateErrorClassPeriod, savedNoting, msgDeleteSuccessClassPeriod, msgDeleteErrorClassPeriod, classPeriodAlreadyExists, successMsgDispDuration, errorMsgDispDuration } from '../../static-data/constants';
import { NgForm } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { DefineClassPeriodUtil } from './define-class-period.util';

@Component({
  selector: 'app-define-period',
  templateUrl: './define-period.component.html',
  styleUrls: ['./define-period.component.scss']
})
export class DefinePeriodComponent implements OnInit {
  classPeriodArray: ClassPeriodModule[];
  msgCreateSuccessClassPeriod: string = msgCreateSuccessClassPeriod;
  msgCreateErrorClassPeriod: string = msgCreateErrorClassPeriod;
  msgUpdateSuccessClassPeriod: string = msgUpdateSuccessClassPeriod;
  msgUpdateErrorClassPeriod: string = msgUpdateErrorClassPeriod;
  savedNoting: string = savedNoting;
  msgDeleteSuccessClassPeriod: string = msgDeleteSuccessClassPeriod;
  msgDeleteErrorClassPeriod: string = msgDeleteErrorClassPeriod;
  classPeriodAlreadyExists: string = classPeriodAlreadyExists;
  successMsgDispDuration: number = successMsgDispDuration;
  errorMsgDispDuration: number = errorMsgDispDuration;

  model: ClassPeriodModule = new ClassPeriodModule(1, '', '', '', new Date(), new Date(), '');
  @ViewChild('addClassPeriodForm') addClassPeriodForm: NgForm;

  // table starts 
  displayedColumns: string[] = ['id', 'classPeriodName', 'classPeriodFrom', 'classPeriodTo', 'createDate', 'createBy', 'edit', 'delete'];

  dataSource: MatTableDataSource<ClassPeriodModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private defineClassPeriodUtil: DefineClassPeriodUtil, public snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.classPeriodArray = [
      new ClassPeriodModule(1, 'Period 1', '9:00', '10:00', new Date(), new Date(), 'aAnokha'),
      new ClassPeriodModule(2, 'Period 2', '10:00', '11:00', new Date(), new Date(), 'bAnokha'),
      new ClassPeriodModule(3, 'Period 3', '11:00', '12:00', new Date(), new Date(), 'sAnokha'),
      new ClassPeriodModule(4, 'Period 4', '12:00', '13:00', new Date(), new Date(), 'dAnokha'),
      new ClassPeriodModule(5, 'Period 5', '13:00', '14:00', new Date(), new Date(), 'fAnokha'),
      new ClassPeriodModule(6, 'Period 6', '14:00', '15:00', new Date(), new Date(), 'gAnokha'),
      new ClassPeriodModule(7, 'Period 7', '15:00', '16:00', new Date(), new Date(), 'hAnokha'),
      new ClassPeriodModule(8, 'Period 8', '16:00', '17:00', new Date(), new Date(), 'jAnokha'),
      new ClassPeriodModule(9, 'Period 9', '17:00', '18:00', new Date(), new Date(), 'kAknokha'),
      new ClassPeriodModule(10, 'Period 10', '18:00', '19:00', new Date(), new Date(), 'lAnokha'),
      new ClassPeriodModule(11, 'Period 11', '19:00', '20:00', new Date(), new Date(), 'yAnokha'),
      new ClassPeriodModule(12, 'Period 12', '20:00', '21:00', new Date(), new Date(), 'rAnokha'),
    ];

    this.putdataIntoDataSource(this.classPeriodArray);
  }

  putdataIntoDataSource(classPeriodArray: ClassPeriodModule[]) {
    this.dataSource = new MatTableDataSource(classPeriodArray);
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
