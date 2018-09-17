import { Component, OnInit, ViewChild } from '@angular/core';
import { AcademicYearModule } from './academicyear.module';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { FullMonthName } from '../../static-data/months';
import { msgCreateSuccessAcademicYear, msgCreateErrorAcademicYear, msgUpdateSuccessAcademicYear, msgUpdateErrorAcademicYear, savedNoting, msgDeleteSuccessAcademicYear, msgDeleteErrorAcademicYear, academicYearAlreadyExists, successMsgDispDuration, errorMsgDispDuration } from '../../static-data/constants';
import { AcademicsUtils } from '../academics.util';
import { EditAcademicYearModalComponent } from './edit-academic-year-modal/edit-academic-year-modal.component';

@Component({
  selector: 'app-create-academic-year',
  templateUrl: './create-academic-year.component.html',
  styleUrls: ['./create-academic-year.component.scss']
})
export class CreateAcademicYearComponent implements OnInit {
  msgSuccess: string = '';
  msgError: string = '';
  academicYearArray: AcademicYearModule[];
  fullMonthName: string[] = FullMonthName;
  msgCreateSuccessAcademicYear: string = msgCreateSuccessAcademicYear;
  msgCreateErrorAcademicYear: string = msgCreateErrorAcademicYear;
  msgUpdateSuccessAcademicYear: string = msgUpdateSuccessAcademicYear;
  msgUpdateErrorAcademicYear: string = msgUpdateErrorAcademicYear
  savedNoting: string = savedNoting;
  msgDeleteSuccessCategory: string = msgDeleteSuccessAcademicYear;
  msgDeleteErrorCategory: string = msgDeleteErrorAcademicYear;
  academicYearAlreadyExists: string = academicYearAlreadyExists;
  successMsgDispDuration: number = successMsgDispDuration;
  errorMsgDispDuration: number = errorMsgDispDuration;

  model: AcademicYearModule = new AcademicYearModule(1, '', '', '', '', new Date(), new Date(), '');
  @ViewChild('addAcademicYearForm') addAcademicYearForm: NgForm;

  // table starts 
  displayedColumns: string[] = ['id', 'academicYearName', 'academicStartMonthYear', 'academicEndMonthYear', 'createDate', 'createBy', 'edit'];

  dataSource: MatTableDataSource<AcademicYearModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private academicsUtils: AcademicsUtils, public snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.academicYearArray = [
      new AcademicYearModule(1, 'April', '2010', 'March', '2011', new Date(), new Date(), 'aAnokha'),
      new AcademicYearModule(2, 'April', '2011', 'March', '2012', new Date(), new Date(), 'bAnokha'),
      new AcademicYearModule(3, 'April', '2012', 'March', '2013', new Date(), new Date(), 'sAnokha'),
      new AcademicYearModule(4, 'April', '2013', 'March', '2014', new Date(), new Date(), 'dAnokha'),
      new AcademicYearModule(5, 'April', '2014', 'March', '2015', new Date(), new Date(), 'fAnokha'),
      new AcademicYearModule(6, 'April', '2015', 'March', '2016', new Date(), new Date(), 'gAnokha'),
      new AcademicYearModule(7, 'April', '2016', 'March', '2017', new Date(), new Date(), 'hAnokha'),
      new AcademicYearModule(8, 'April', '2017', 'March', '2018', new Date(), new Date(), 'jAnokha'),
      new AcademicYearModule(9, 'April', '2018', 'March', '2019', new Date(), new Date(), 'kAknokha'),
      new AcademicYearModule(10, 'April', '2019', 'March', '2020', new Date(), new Date(), 'lAnokha'),
      new AcademicYearModule(11, 'April', '2020', 'March', '2021', new Date(), new Date(), 'yAnokha'),
      new AcademicYearModule(12, 'April', '2021', 'March', '2022', new Date(), new Date(), 'rAnokha'),
    ];

    this.putdataIntoDataSource(this.academicYearArray);
  }

  putdataIntoDataSource(academicYearArray: AcademicYearModule[]) {
    this.dataSource = new MatTableDataSource(academicYearArray);
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

   // Add a new academic year
   addAcademicYear() {
    console.log('this.addAcademicYearForm=== ', this.addAcademicYearForm.value);
    if (this.addAcademicYearForm.valid) {
      // call REST API to check if academic year already exists in database and to save into database
      if (true) { // assuming this is now academic year to be added
        

        const newAcademicYear: AcademicYearModule = new AcademicYearModule(this.academicYearArray.length + 1,
          this.addAcademicYearForm.value.academicMonthStart, this.addAcademicYearForm.value.academicYearStart,
          this.addAcademicYearForm.value.academicMonthEnd, this.addAcademicYearForm.value.academicYearEnd, 
          new Date(), new Date(), 'Anokha');



        this.academicYearArray.push(newAcademicYear);

        this.putdataIntoDataSource(this.academicYearArray);
        // Open Snack-bar with a custom message if saved successfully 
        this.snackBar.open(this.msgCreateSuccessAcademicYear, '', {
          duration: this.successMsgDispDuration,
        });
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.msgCreateErrorAcademicYear, {
          duration: this.errorMsgDispDuration,
        });

        // to reset the class form 
        this.addAcademicYearForm.reset();
      } else {
        // Open Snack-bar with a custom message if error occured while saving to database
        this.snackBar.open('', this.academicYearAlreadyExists, {
          duration: this.errorMsgDispDuration,
        });
      }
    } else {
      // Open Snack-bar with a custom message if error occured while saving to database
      this.snackBar.open('', this.msgCreateErrorAcademicYear, {
        duration: this.errorMsgDispDuration,
      });
    }
  }

    // Open modal to edit Academic year details
    openEditAcademicYearDialog(row: AcademicYearModule) {
      console.log('suject modal row===== ', row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      dialogConfig.data = {
        row
      };
      const dialogRef = this.dialog.open(EditAcademicYearModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => {
          console.log("Dialog output:", data);
          if (typeof data !== 'undefined') {
            // Save this data (after return from modal edit) to database
  
  
            // Open Snack-bar with a custom message if saved successfully 
            this.snackBar.open(this.msgUpdateSuccessAcademicYear, '', {
              duration: this.successMsgDispDuration,
            });
            // Open Snack-bar with a custom message if error occured while saving to database
            this.snackBar.open('', this.msgUpdateErrorAcademicYear, {
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

}
