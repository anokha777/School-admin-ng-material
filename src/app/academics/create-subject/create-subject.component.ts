import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectModule } from './subject.module';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { AcademicsUtils } from '../academics.util';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { EditSubjectModalComponent } from './edit-subject-modal/edit-subject-modal.component';


@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent implements OnInit {
  msgSuccess: string = '';
  msgError: string = '';
  subjectArray: SubjectModule[];

  model: SubjectModule = new SubjectModule(1, '', '', new Date(), new Date(), '');
  @ViewChild('addSubjectForm') addSubjectForm: NgForm; 

  // table starts
  displayedColumns: string[] = ['id', 'name', 'code',  'createDate', 'createBy', 'edit', 'delete'];
  
  dataSource: MatTableDataSource<SubjectModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private dialog: MatDialog, private academicsUtils: AcademicsUtils ) { 
    // Assign the data to the data source for the table to render
    this.subjectArray = [
      new SubjectModule(1, 'Subject A', 'A', new Date(), new Date(), 'Anokha'), 
      new SubjectModule(2, 'Subject B', 'B', new Date(), new Date(), 'Banokha'), 
      new SubjectModule(3, 'Subject C', 'C', new Date(), new Date(), 'Canokha'), 
      new SubjectModule(4, 'Subject D', 'D', new Date(), new Date(), 'Danokha'), 
      new SubjectModule(5, 'Subject E', 'E', new Date(), new Date(), 'Eanokha'), 
      new SubjectModule(6, 'Subject F', 'F', new Date(), new Date(), 'Fanokha'), 
      new SubjectModule(7, 'Subject G', 'G', new Date(), new Date(), 'Anokha'), 
      new SubjectModule(8, 'Subject H', 'H', new Date(), new Date(), 'Anokha'), 
      new SubjectModule(9, 'Subject I', 'I', new Date(), new Date(), 'Anokha')
    ];
    
    this.putdataIntoDataSource(this.subjectArray);
  }

  putdataIntoDataSource(subjectArray: SubjectModule[]){
    this.dataSource = new MatTableDataSource(subjectArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  clearSuccessOrErrorMsg() {
    this.msgSuccess = '';
    this.msgError = '';
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    // Add a new subject
    addSubject() {
      console.log('this.addSubjectForm=== ', this.addSubjectForm.value);  
      if (this.addSubjectForm.valid) {
        // check if Suject already exists
        if(!this.academicsUtils.findOjectInArrayByProperty(this.subjectArray, this.addSubjectForm.value.code)
        || !this.academicsUtils.findOjectInArrayByProperty(this.subjectArray, this.addSubjectForm.value.name)) {
          // now call REST API to save into database
  
  
          const newSubject: SubjectModule = new SubjectModule(this.subjectArray.length + 1, 
            this.addSubjectForm.value.name, this.addSubjectForm.value.code,
            new Date(), new Date(), 'Anokha');
          
    
    
          this.subjectArray.push(newSubject);
    
          this.putdataIntoDataSource(this.subjectArray);
          
          this.msgSuccess = 'Subject added successfully!';
          this.msgError = 'There is error while adding Subject, please try after some time.';
          this.addSubjectForm.reset();
        } else {
          this.msgError = 'Either Subject name or code already exists.';
        }
  
  
        
      } else {
        this.msgSuccess = '';
        this.msgError = 'There is error while adding Subject, please try after some time.';
      }
    }

    // Open modal to edit Subject details
    openEditSubjectDialog(row: SubjectModule) {
      console.log('suject modal row===== ', row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      dialogConfig.data = {
        row
      };
      //this.dialog.open(EditSubjectModalComponent, dialogConfig);
      const dialogRef = this.dialog.open(EditSubjectModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
          data => {
            console.log("Dialog output:", data);
            if(typeof data !== 'undefined') {
              // Save this data (after return from modal edit) to database
  
              this.msgSuccess = 'Subject details updated successfully.';
              this.msgError = 'There is error while update Subject details, please try after some time.';
            } else {
              this.msgSuccess = '';
              this.msgError = 'You saved nothing.';
            }
          }
      );    
    }
  
    // Open modal to delete Subject details
    openDeleteSubjectDialog(row: SubjectModule) {
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
          if(typeof data !== 'undefined') {
            // Delete this data (after return from modal delete) from database
  
            this.msgSuccess = 'Subject details deleted successfully.';
            this.msgError = 'There is error while delete Subject details, please try after some time.';
          } else {
            this.msgSuccess = '';
            this.msgError = '';
          }
        }
      ); 
    }

} 
