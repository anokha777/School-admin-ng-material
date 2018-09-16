import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassModule } from './class.module';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { AcademicsUtils } from '../academics.util';
import { EditClassModalComponent } from './edit-class-modal/edit-class-modal.component';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {
  msgSuccess: string = '';
  msgError: string = '';
  classArray: ClassModule[];

  model: ClassModule = new ClassModule(1, '', '', new Date(), new Date(), '');
  @ViewChild('addClassForm') addClassForm: NgForm; 

  // table starts
  displayedColumns: string[] = ['id', 'name', 'code',  'createDate', 'createBy', 'edit', 'delete'];
  
  dataSource: MatTableDataSource<ClassModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private dialog: MatDialog, private academicsUtils: AcademicsUtils ) { 
    // Assign the data to the data source for the table to render
    this.classArray = [
      new ClassModule(1, 'Class A', 'A', new Date(), new Date(), 'Anokha'), 
      new ClassModule(2, 'Class B', 'B', new Date(), new Date(), 'Banokha'), 
      new ClassModule(3, 'Class C', 'C', new Date(), new Date(), 'Canokha'), 
      new ClassModule(4, 'Class D', 'D', new Date(), new Date(), 'Danokha'), 
      new ClassModule(5, 'Class E', 'E', new Date(), new Date(), 'Eanokha'), 
      new ClassModule(6, 'Class F', 'F', new Date(), new Date(), 'Fanokha'), 
      new ClassModule(7, 'Class G', 'G', new Date(), new Date(), 'Anokha'), 
      new ClassModule(8, 'Class H', 'H', new Date(), new Date(), 'Anokha'), 
      new ClassModule(9, 'Class I', 'I', new Date(), new Date(), 'Anokha')
    ];
    
    this.putdataIntoDataSource(this.classArray);
  }

  putdataIntoDataSource(classArray: ClassModule[]){
    this.dataSource = new MatTableDataSource(classArray);
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

  // Add a new class
  addClass() {
    console.log('this.addClassForm=== ', this.addClassForm.value);  
    if (this.addClassForm.valid) {
      // check if Class already exists
      if(!this.academicsUtils.findOjectInArrayByProperty(this.classArray, this.addClassForm.value.code)
      || !this.academicsUtils.findOjectInArrayByProperty(this.classArray, this.addClassForm.value.name)) {
        // now call REST API to save into database


        const newClass: ClassModule = new ClassModule(this.classArray.length + 1, 
          this.addClassForm.value.name, this.addClassForm.value.code,
          new Date(), new Date(), 'Anokha');
        
  
  
        this.classArray.push(newClass);
  
        this.putdataIntoDataSource(this.classArray);
        
        this.msgSuccess = 'Class added successfully!';
        this.msgError = 'There is error while adding Class, please try after some time.';
        this.addClassForm.reset();
      } else {
        this.msgError = 'Either Class anme or code already exists.';
      }


      
    } else {
      this.msgSuccess = '';
      this.msgError = 'There is error while adding Class, please try after some time.';
    }
  }

    // Open modal to edit Class details
    openEditClassDialog(row: ClassModule) {
      console.log('row===== ', row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      dialogConfig.data = {
        row
      };
      //this.dialog.open(EditClassModalComponent, dialogConfig);
      const dialogRef = this.dialog.open(EditClassModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
          data => {
            console.log("Dialog output:", data);
            if(typeof data !== 'undefined') {
              // Save this data (after return from modal edit) to database
  
              this.msgSuccess = 'Class details updated successfully.';
              this.msgError = 'There is error while update Class details, please try after some time.';
            } else {
              this.msgSuccess = '';
              this.msgError = 'You saved nothing.';
            }
          }
      );    
    }
  
    // Open modal to delete Class details
    openDeleteClassDialog(row: ClassModule) {
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
  
            this.msgSuccess = 'Class details deleted successfully.';
            this.msgError = 'There is error while delete Class details, please try after some time.';
          } else {
            this.msgSuccess = '';
            this.msgError = '';
          }
        }
      ); 
    }

} 
