import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassNameList, SubjectList } from '../../static-data/temp-school-constant';
import { ClassSubjectAssignModule } from './class-subject-assign.model';
import { savedNoting, successMsgDispDuration, errorMsgDispDuration, msgCreateSuccessClassSubAssign, msgCreateErrorClassSubAssign, msgUpdateSuccessClassSubAssign, msgUpdateErrorClassSubAssign, msgDeleteSuccessClassSubAssign, msgDeleteErrorClassSubAssign, classSubjectAssignAlreadyExists } from '../../static-data/constants';
import { NgForm, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { ClassSubjectAssignUtil } from './class-subject-assign.util';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { EditClassSubjectModalComponent } from './edit-class-subject-modal/edit-class-subject-modal.component';

@Component({
  selector: 'app-assign-class-subject',
  templateUrl: './assign-class-subject.component.html',
  styleUrls: ['./assign-class-subject.component.scss']
})
export class AssignClassSubjectComponent implements OnInit {

  classNameList: string[] = ClassNameList;
  subjectList: string[] = SubjectList;
  classSubjectAssignArray: ClassSubjectAssignModule[];
  msgCreateSuccessClassSubAssign = msgCreateSuccessClassSubAssign;
  msgCreateErrorClassSubAssign = msgCreateErrorClassSubAssign;
  msgUpdateSuccessClassSubAssign = msgUpdateSuccessClassSubAssign;
  msgUpdateErrorClassSubAssign = msgUpdateErrorClassSubAssign;
  msgDeleteSuccessClassSubAssign = msgDeleteSuccessClassSubAssign;
  msgDeleteErrorClassSubAssign = msgDeleteErrorClassSubAssign;
  classSubjectAssignAlreadyExists = classSubjectAssignAlreadyExists;
  savedNoting: string = savedNoting;
  successMsgDispDuration: number = successMsgDispDuration;
  errorMsgDispDuration: number = errorMsgDispDuration;

  model: ClassSubjectAssignModule = new ClassSubjectAssignModule(1, '', [], new Date(), new Date(), '');
  @ViewChild('classSubjectAssignForm') classSubjectAssignForm: NgForm;

  // table starts 
  displayedColumns: string[] = ['id', 'className', 'subjectsName', 'createDate', 'createBy', 'edit', 'delete'];

  dataSource: MatTableDataSource<ClassSubjectAssignModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  subject = new FormControl();

  constructor(private dialog: MatDialog, private classSubjectAssignUtil: ClassSubjectAssignUtil, public snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.classSubjectAssignArray = [
      new ClassSubjectAssignModule(1, 'LKG', ['AHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'aAnokha'),
      new ClassSubjectAssignModule(2, 'UKG', ['Hindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'bAnokha'),
      new ClassSubjectAssignModule(3, 'Class 1', ['Hindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'sAnokha'),
      new ClassSubjectAssignModule(4, 'Class 2', ['DHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'dAnokha'),
      new ClassSubjectAssignModule(5, 'Class 3', ['EHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'fAnokha'),
      new ClassSubjectAssignModule(6, 'Class 4', ['FHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'gAnokha'),
      new ClassSubjectAssignModule(7, 'Class 5', ['GHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'hAnokha'),
      new ClassSubjectAssignModule(8, 'Class 6', ['HHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'jAnokha'),
      new ClassSubjectAssignModule(9, 'Class 7', ['IHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'kAknokha'),
      new ClassSubjectAssignModule(10, 'Class 8', ['JHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'lAnokha'),
      new ClassSubjectAssignModule(11, 'Class 9', ['KHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'yAnokha'),
      new ClassSubjectAssignModule(12, 'Class 10', ['LHindi', 'English', 'Social Science', 'Maths', 'Science', 'Computer'],
        new Date(), new Date(), 'rAnokha'),
    ];

    this.putdataIntoDataSource(this.classSubjectAssignArray);
  }

  putdataIntoDataSource(classSubjectAssignArray: ClassSubjectAssignModule[]) {
    this.dataSource = new MatTableDataSource(classSubjectAssignArray);
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

  // Add new class subject assign
  addClassSubjectAssign() {
    console.log('this.classSubjectAssignForm=== ', this.classSubjectAssignForm.value);
    if (this.classSubjectAssignForm.valid) {
      // call REST API to check if class subject assign already exists in database and to save into database
      if (this.classSubjectAssignUtil.checkClassSubjectAssigned(this.classSubjectAssignArray, this.classSubjectAssignForm.value.className)) { // Call a functio to ckeck if this subject assign already exits.
        // assuming this is now academic year to be added
        const newSubjectAssign: ClassSubjectAssignModule = new ClassSubjectAssignModule(this.classSubjectAssignArray.length + 1,
          this.classSubjectAssignForm.value.className, this.subject.value,
          new Date(), new Date(), 'Anokha');



        this.classSubjectAssignArray.push(newSubjectAssign);

        this.putdataIntoDataSource(this.classSubjectAssignArray);
        // Open Snack-bar with a custom message if saved successfully 
        this.snackBar.open(this.msgCreateSuccessClassSubAssign, '', {
          duration: this.successMsgDispDuration,
        });
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.msgCreateErrorClassSubAssign, {
          duration: this.errorMsgDispDuration,
        });

        // to reset the class form 
        this.classSubjectAssignForm.reset();

      } else {
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.classSubjectAssignAlreadyExists, {
          duration: this.errorMsgDispDuration,
        });
      }
    } else {
      // Open Snack-bar with a custom message if error occured while saving to database
      this.snackBar.open('', this.msgCreateErrorClassSubAssign, {
        duration: this.errorMsgDispDuration,
      });
    }
  }

  // Edit Class subject assign detail
  openEditClassSubjectDialog(row: ClassSubjectAssignModule) {
    
    console.log('edit modal row===== ', row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      row
    };
    const dialogRef = this.dialog.open(EditClassSubjectModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (typeof data !== 'undefined') {
          // Save this data (after return from modal edit) to database


          // Open Snack-bar with a custom message if saved successfully 
          this.snackBar.open(this.msgUpdateSuccessClassSubAssign, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgUpdateErrorClassSubAssign, {
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


  // Open modal to delete Class Subject details
  openDeleteClassSubjectDialog(row: ClassSubjectAssignModule) {
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


          // Open Snack-bar with a custom message if deleted successfully 
          this.snackBar.open(this.msgDeleteSuccessClassSubAssign, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgDeleteErrorClassSubAssign, {
            duration: this.errorMsgDispDuration,
          });
        }
      }
    );
  }


}
