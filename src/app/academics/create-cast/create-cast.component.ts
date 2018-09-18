import { Component, OnInit, ViewChild } from '@angular/core';
import { CastCategoryList, ReligionList } from '../../static-data/temp-school-constant';
import { CastModule } from './cast.module';
import { msgCreateSuccessCast, msgCreateErrorCast, msgUpdateSuccessCast, msgUpdateErrorCast, savedNoting, msgDeleteSuccessCast, msgDeleteErrorCast, castAlreadyExists, successMsgDispDuration, errorMsgDispDuration } from '../../static-data/constants';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { CreateCastUtil } from './create-cast.util';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { EditCastModalComponent } from './edit-cast-modal/edit-cast-modal.component';

@Component({
  selector: 'app-create-cast',
  templateUrl: './create-cast.component.html',
  styleUrls: ['./create-cast.component.scss']
})
export class CreateCastComponent implements OnInit {
  castCategoryList: string[] = CastCategoryList;
  religionList: string[] = ReligionList;
  castArray: CastModule[];
  msgCreateSuccessCast: string = msgCreateSuccessCast;
  msgCreateErrorCast: string = msgCreateErrorCast;
  msgUpdateSuccessCast: string = msgUpdateSuccessCast;
  msgUpdateErrorCast: string = msgUpdateErrorCast;
  savedNoting: string = savedNoting;
  msgDeleteSuccessCast: string = msgDeleteSuccessCast;
  msgDeleteErrorCast: string = msgDeleteErrorCast;
  castAlreadyExists: string = castAlreadyExists;
  successMsgDispDuration: number = successMsgDispDuration;
  errorMsgDispDuration: number = errorMsgDispDuration;

  model: CastModule = new CastModule(1, '', '', '', new Date(), new Date(), '');
  @ViewChild('castForm') castForm: NgForm;

  // table starts 
  displayedColumns: string[] = ['id', 'castName', 'castCategory', 'religionName', 'createDate', 'createBy', 'edit', 'delete'];

  dataSource: MatTableDataSource<CastModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private dialog: MatDialog, private createCastUtil: CreateCastUtil, public snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.castArray = [
      new CastModule(1, 'Yadav', 'OBC', 'Hindu', new Date(), new Date(), 'aAnokha'),
      new CastModule(2, 'Tiwari', 'General', 'Hindu', new Date(), new Date(), 'bAnokha'),
      new CastModule(3, 'Ansari', 'Schedule Cast', 'Muslim', new Date(), new Date(), 'sAnokha'),
      new CastModule(4, 'Sharma', 'Schedule Tribe', 'Hindu', new Date(), new Date(), 'dAnokha'),
      new CastModule(5, 'Yadav', 'OBC', 'Hindu', new Date(), new Date(), 'aAnokha'),
      new CastModule(6, 'Tiwari', 'General', 'Hindu', new Date(), new Date(), 'bAnokha'),
      new CastModule(7, 'Ansari', 'Schedule Cast', 'Muslim', new Date(), new Date(), 'sAnokha'),
      new CastModule(8, 'Sharma', 'Schedule Tribe', 'Hindu', new Date(), new Date(), 'dAnokha'),

    ];

    this.putdataIntoDataSource(this.castArray);
  }

  putdataIntoDataSource(castArray: CastModule[]) {
    this.dataSource = new MatTableDataSource(castArray);
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

  // add a new cast
  addCast() {
    console.log('this.castForm=== ', this.castForm.value);
    if (this.castForm.valid) {
      // check if cast already exists
      if (!this.createCastUtil.checkCastExists(this.castArray, this.castForm.value.castName)) {
        // now call REST API to save into database


        const newCast: CastModule = new CastModule(this.castArray.length + 1,
          this.castForm.value.castName, this.castForm.value.castCategory, this.castForm.value.religionName, 
          new Date(), new Date(), 'Anokha');



        this.castArray.push(newCast);

        this.putdataIntoDataSource(this.castArray);
        // Open Snack-bar with a custom message if saved successfully 
        this.snackBar.open(this.msgCreateSuccessCast, '', {
          duration: this.successMsgDispDuration,
        });
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.msgCreateErrorCast, {
          duration: this.errorMsgDispDuration,
        });

        // to reset the class form 
        this.castForm.reset();
      } else {
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.castAlreadyExists, {
          duration: this.errorMsgDispDuration,
        });
      }
    } else {
      // Open Snack-bar with a custom message if error occured while saving to database
      this.snackBar.open('', this.msgCreateErrorCast, {
        duration: this.errorMsgDispDuration,
      });
    }
  }

  // Open modal to edit Cast details
  openEditCastDialog(row: CastModule) {
    console.log('LimitStudentModule modal row===== ', row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      row
    };
    const dialogRef = this.dialog.open(EditCastModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (typeof data !== 'undefined') {
          // Save this data (after return from modal edit) to database


          // Open Snack-bar with a custom message if saved successfully 
          this.snackBar.open(this.msgUpdateSuccessCast, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgUpdateErrorCast, {
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

  // Open modal to delete Cast details
  openDeleteCastDialog(row: CastModule) {
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
          this.snackBar.open(this.msgDeleteSuccessCast, '', {
            duration: this.successMsgDispDuration,
          });
          // Open Snack-bar with a custom message if error occured while saving to database
          this.snackBar.open('', this.msgDeleteErrorCast, {
            duration: this.errorMsgDispDuration,
          });
        }
      }
    );
  }

}
