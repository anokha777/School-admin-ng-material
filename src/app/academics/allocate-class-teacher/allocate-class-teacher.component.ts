import { Component, OnInit, ViewChild } from '@angular/core';
import { TeachersList, ClassNameList, SectionNameList } from '../../static-data/temp-school-constant';
import { AllocateClassTeacherModule } from './allocate-class-teacher.module';
import { msgCreateSuccessAllocateClassTeacher, savedNoting, msgCreateErrorAllocateClassTeacher, msgUpdateSuccessAllocateClassTeacher, msgUpdateErrorAllocateClassTeacher, msgDeleteSuccessAllocateClassTeacher, msgDeleteErrorAllocateClassTeacher, classTeacherAlreadyExists, successMsgDispDuration, errorMsgDispDuration } from '../../static-data/constants';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { AllocateClassTeacherUtil } from './allocate-class-teacher.util';
import { EditClassTeacherModalComponent } from './edit-class-teacher-modal/edit-class-teacher-modal.component';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';

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
  displayedColumns: string[] = ['id', 'className', 'sectionName', 'classTeacherName', 'classTeacherImgUrl', 'createDate', 'createBy', 'edit', 'delete'];

  dataSource: MatTableDataSource<AllocateClassTeacherModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private allocateClassTeacherUtil: AllocateClassTeacherUtil, public snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.allocatedClassTeacherArray = [
      new AllocateClassTeacherModule(1, 'LKG', 'Section A', 'Hemant Pathak', 'imageUrl', new Date(), new Date(), 'aAnokha'),
      new AllocateClassTeacherModule(2, 'UKG', 'Section B', 'Sanjay Pathak', 'imageUrl', new Date(), new Date(), 'bAnokha'),
      new AllocateClassTeacherModule(3, 'Class 1', 'Section C', 'Syam Sundar Singh', 'imageUrl', new Date(), new Date(), 'sAnokha'),
      new AllocateClassTeacherModule(4, 'Class 2', 'Section D', 'Sumant Pathak', 'imageUrl', new Date(), new Date(), 'dAnokha'),
      new AllocateClassTeacherModule(5, 'Class 3', 'Section C', 'Vinay', 'imageUrl', new Date(), new Date(), 'fAnokha'),
      new AllocateClassTeacherModule(6, 'Class 4', 'Section D', 'Shambhu Kumar', 'imageUrl', new Date(), new Date(), 'gAnokha'),
      new AllocateClassTeacherModule(7, 'Class 5', 'Section B', 'Ranjan Roy', 'imageUrl', new Date(), new Date(), 'hAnokha'),
      new AllocateClassTeacherModule(8, 'Class 6', 'Section B', 'Vikash', 'imageUrl', new Date(), new Date(), 'jAnokha'),
      new AllocateClassTeacherModule(9, 'Class 7', 'Section A', 'Ramesh', 'imageUrl', new Date(), new Date(), 'kAknokha'),
      new AllocateClassTeacherModule(10, 'Class 8', 'Section D', 'Mukesh', 'imageUrl', new Date(), new Date(), 'lAnokha'),
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

  // add class teacher to a class
  allocateClassTeacher() {
    console.log('this.addClassTeacherForm=== ', this.addClassTeacherForm.value);
    if (this.addClassTeacherForm.valid) {
      // call REST API to check if class subject assign already exists in database and to save into database
      if (!this.allocateClassTeacherUtil.checkClassTeacherAllocated(this.allocatedClassTeacherArray,
        this.addClassTeacherForm.value.classTeacherName, this.addClassTeacherForm.value.sectionName,
        this.addClassTeacherForm.value.className)) { // Call a functio to ckeck if this subject assign already exits.
        // assuming this is now academic year to be added
        const newClassTeacher: AllocateClassTeacherModule = new AllocateClassTeacherModule(this.allocatedClassTeacherArray.length + 1,
          this.addClassTeacherForm.value.className, this.addClassTeacherForm.value.sectionName,
          this.addClassTeacherForm.value.classTeacherName, this.addClassTeacherForm.value.url,
          new Date(), new Date(), 'Anokha');



        this.allocatedClassTeacherArray.push(newClassTeacher);

        this.putdataIntoDataSource(this.allocatedClassTeacherArray);
        // Open Snack-bar with a custom message if saved successfully 
        this.snackBar.open(this.msgCreateSuccessAllocateClassTeacher, '', {
          duration: this.successMsgDispDuration,
        });
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.msgCreateErrorAllocateClassTeacher, {
          duration: this.errorMsgDispDuration,
        });

        // to reset the class form 
        this.addClassTeacherForm.reset();

      } else {
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.classTeacherAlreadyExists, {
          duration: this.errorMsgDispDuration,
        });
      }
    } else {
      // Open Snack-bar with a custom message if error occured while saving to database
      this.snackBar.open('', this.msgCreateErrorAllocateClassTeacher, {
        duration: this.errorMsgDispDuration,
      });
    }
  }

  // Edit Class teacher detail
  openEditClassTeacherDialog(row: AllocateClassTeacherModule) {

    console.log('edit modal row===== ', row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      row
    };
    const dialogRef = this.dialog.open(EditClassTeacherModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (typeof data !== 'undefined') {
          // Save this data (after return from modal edit) to database


          // Open Snack-bar with a custom message if saved successfully 
          this.snackBar.open(this.msgUpdateSuccessAllocateClassTeacher, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgUpdateErrorAllocateClassTeacher, {
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
  openDeleteClassTeacherDialog(row: AllocateClassTeacherModule) {
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
          this.snackBar.open(this.msgDeleteSuccessAllocateClassTeacher, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgDeleteErrorAllocateClassTeacher, {
            duration: this.errorMsgDispDuration,
          });
        }
      }
    );
  }

}
