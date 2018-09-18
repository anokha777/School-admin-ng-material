import { Component, OnInit, ViewChild } from '@angular/core';
import { LimitStudentModule } from './limit-student.module';
import { ClassNameList, SectionNameList } from '../../static-data/temp-school-constant';
import { msgCreateSuccessLimitStudent, limitStudentAlreadyExists, msgDeleteErrorLimitStudent, msgDeleteSuccessLimitStudent, msgUpdateErrorLimitStudent, msgUpdateSuccessLimitStudent, msgCreateErrorLimitStudent, savedNoting, successMsgDispDuration, errorMsgDispDuration } from '../../static-data/constants';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { LimitStudentUtil } from './limit-student.util';
import { EditLimitStudentModalComponent } from './edit-limit-student-modal/edit-limit-student-modal.component';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';

@Component({
  selector: 'app-limit-students-in-section',
  templateUrl: './limit-students-in-section.component.html',
  styleUrls: ['./limit-students-in-section.component.scss']
})
export class LimitStudentsInSectionComponent implements OnInit {
  limitStudentArray: LimitStudentModule[];
  classNameList: string[] = ClassNameList;
  sectionNameList: string[] = SectionNameList;
  msgCreateSuccessLimitStudent = msgCreateSuccessLimitStudent;
  msgCreateErrorLimitStudent = msgCreateErrorLimitStudent;
  msgUpdateSuccessLimitStudent = msgUpdateSuccessLimitStudent;
  msgUpdateErrorLimitStudent = msgUpdateErrorLimitStudent;
  msgDeleteSuccessLimitStudent = msgDeleteSuccessLimitStudent;
  msgDeleteErrorLimitStudent = msgDeleteErrorLimitStudent;
  limitStudentAlreadyExists = limitStudentAlreadyExists;
  savedNoting: string = savedNoting;
  successMsgDispDuration: number = successMsgDispDuration;
  errorMsgDispDuration: number = errorMsgDispDuration;

  model: LimitStudentModule = new LimitStudentModule(1, '', '', 0, 0, 0, 0, new Date(), new Date(), '');
  @ViewChild('limitStudentForm') limitStudentForm: NgForm;

  // table starts 
  displayedColumns: string[] = ['id', 'className', 'sectionName', 'limitBoyNumber', 'limitGirlNumber', 'admittedBoy', 'admittedGirl', 'createDate', 'createBy', 'edit', 'delete'];

  dataSource: MatTableDataSource<LimitStudentModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private limitStudentUtil: LimitStudentUtil, public snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.limitStudentArray = [
      new LimitStudentModule(1, 'LKG', 'Section A', 40, 30, 20, 21, new Date(), new Date(), 'aAnokha'),
      new LimitStudentModule(2, 'UKG', 'Section C', 12, 30, 20, 21, new Date(), new Date(), 'bAnokha'),
      new LimitStudentModule(3, 'Class 1', 'Section C', 13, 30, 20, 21, new Date(), new Date(), 'sAnokha'),
      new LimitStudentModule(4, 'Class 2', 'Section C', 14, 30, 20, 21, new Date(), new Date(), 'dAnokha'),
      new LimitStudentModule(5, 'Class 3', 'Section C', 15, 30, 20, 21, new Date(), new Date(), 'fAnokha'),
      new LimitStudentModule(6, 'Class 4', 'Section C', 16, 30, 20, 21, new Date(), new Date(), 'gAnokha'),
      new LimitStudentModule(7, 'Class 5', 'Section C', 17, 30, 20, 21, new Date(), new Date(), 'hAnokha'),
      new LimitStudentModule(8, 'Class 6', 'Section C', 18, 30, 20, 21, new Date(), new Date(), 'jAnokha'),
      new LimitStudentModule(9, 'Class 7', 'Section C', 19, 30, 20, 21, new Date(), new Date(), 'kAknokha'),
      new LimitStudentModule(10, 'Class 8', 'Section C', 20, 30, 20, 21, new Date(), new Date(), 'lAnokha'),
      new LimitStudentModule(11, 'Class 9', 'Section C', 21, 30, 20, 21, new Date(), new Date(), 'yAnokha'),
      new LimitStudentModule(12, 'Class 10', 'Section C', 22, 30, 20, 21, new Date(), new Date(), 'rAnokha'),
    ];

    this.putdataIntoDataSource(this.limitStudentArray);
  }

  putdataIntoDataSource(limitStudentArray: LimitStudentModule[]) {
    this.dataSource = new MatTableDataSource(limitStudentArray);
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

  // add a new section limits for a class
  addLimitStudentsInSection() {

    console.log('this.limitStudentForm=== ', this.limitStudentForm.value);
    if (this.limitStudentForm.valid) {
      // check if Suject already exists
      if (!this.limitStudentUtil.checkLimitsExists(this.limitStudentArray,
        this.limitStudentForm.value.className, this.limitStudentForm.value.sectionName)) {
        // now call REST API to save into database


        const newLimitStudent: LimitStudentModule = new LimitStudentModule(this.limitStudentArray.length + 1,
          this.limitStudentForm.value.className, this.limitStudentForm.value.sectionName,
          this.limitStudentForm.value.limitBoyNumber, this.limitStudentForm.value.limitGirlNumber,
          0, 0, new Date(), new Date(), 'Anokha');



        this.limitStudentArray.push(newLimitStudent);

        this.putdataIntoDataSource(this.limitStudentArray);
        // Open Snack-bar with a custom message if saved successfully 
        this.snackBar.open(this.msgCreateSuccessLimitStudent, '', {
          duration: this.successMsgDispDuration,
        });
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.msgCreateErrorLimitStudent, {
          duration: this.errorMsgDispDuration,
        });

        // to reset the class form 
        this.limitStudentForm.reset();
      } else {
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.limitStudentAlreadyExists, {
          duration: this.errorMsgDispDuration,
        });
      }
    } else {
      // Open Snack-bar with a custom message if error occured while saving to database
      this.snackBar.open('', this.msgCreateErrorLimitStudent, {
        duration: this.errorMsgDispDuration,
      });
    }
  }

  // Open modal to edit Limit Student details
  openEditLimitStudentDialog(row: LimitStudentModule) {
    console.log('LimitStudentModule modal row===== ', row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      row
    };
    const dialogRef = this.dialog.open(EditLimitStudentModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (typeof data !== 'undefined') {
          // Save this data (after return from modal edit) to database


          // Open Snack-bar with a custom message if saved successfully 
          this.snackBar.open(this.msgUpdateSuccessLimitStudent, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgUpdateErrorLimitStudent, {
            duration: this.errorMsgDispDuration,
          });
        } else {
          // Open Snack-bar with a custom message if user clicked on cancel button on edit modal
          this.snackBar.open('', this.savedNoting, {
            duration: this.errorMsgDispDuration,
          });
        }
      }
    );
  }

  // Open modal to delete Section limit details
  openDeleteLimitStudentDialog(row: LimitStudentModule) {
    console.log('row in delete modal ===== ', row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      row
    };
    const dialogRef = this.dialog.open(DeleteModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output after delete modal:", data);
        if (typeof data !== 'undefined') {
          // Delete this data (after return from modal delete) from database


          // Open Snack-bar with a custom message if saved successfully 
          this.snackBar.open(this.msgDeleteSuccessLimitStudent, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgDeleteErrorLimitStudent, {
            duration: this.errorMsgDispDuration,
          });
        }
      }
    );
  }
}
