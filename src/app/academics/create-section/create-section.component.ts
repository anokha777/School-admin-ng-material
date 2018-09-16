import { Component, OnInit, ViewChild } from '@angular/core';
import { Section } from './section.model';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig} from '@angular/material';
import { NgForm } from '@angular/forms';
import { EditSectionModalComponent } from './edit-section-modal/edit-section-modal.component';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { AcademicsUtils } from '../academics.util';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {
  msgSuccess: string = '';
  msgError: string = '';
  sectionArray: Section[];

  model: Section = new Section(1, '', '', new Date(), new Date(), '');
  @ViewChild('addSectionForm') addSectionForm: NgForm; 

  // table starts
  displayedColumns: string[] = ['id', 'name', 'code',  'createDate', 'createBy', 'edit', 'delete'];
  
  dataSource: MatTableDataSource<Section>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private dialog: MatDialog, private academicsUtils: AcademicsUtils ) {
    // Assign the data to the data source for the table to render
    this.sectionArray = [
      new Section(1, 'Section A', 'A', new Date(), new Date(), 'Anokha'), 
      new Section(2, 'Section B', 'B', new Date(), new Date(), 'Banokha'), 
      new Section(3, 'Section C', 'C', new Date(), new Date(), 'Canokha'), 
      new Section(4, 'Section D', 'D', new Date(), new Date(), 'Danokha'), 
      new Section(5, 'Section E', 'E', new Date(), new Date(), 'Eanokha'), 
      new Section(6, 'Section F', 'F', new Date(), new Date(), 'Fanokha'), 
      new Section(7, 'Section G', 'G', new Date(), new Date(), 'Anokha'), 
      new Section(8, 'Section H', 'H', new Date(), new Date(), 'Anokha'), 
      new Section(9, 'Section I', 'I', new Date(), new Date(), 'Anokha')
    ];
    
    this.putdataIntoDataSource(this.sectionArray);
    
   }

   putdataIntoDataSource(sectionArray: Section[]){
    this.dataSource = new MatTableDataSource(sectionArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Add a new section
  addSection() {
    console.log('this.addSectionForm=== ', this.addSectionForm.value);  
    if (this.addSectionForm.valid) {
      // check if section already exists
      if(!this.academicsUtils.findOjectInArrayByProperty(this.sectionArray, this.addSectionForm.value.code)
      || !this.academicsUtils.findOjectInArrayByProperty(this.sectionArray, this.addSectionForm.value.name)) {
        // now call REST API to save into database


        const newSection: Section = new Section(this.sectionArray.length + 1, 
          this.addSectionForm.value.name, this.addSectionForm.value.code,
          new Date(), new Date(), 'Anokha');
        
  
  
        this.sectionArray.push(newSection);
  
        this.putdataIntoDataSource(this.sectionArray);
        
        this.msgSuccess = 'Section added successfully!';
        this.msgError = 'There is error while adding section, please try after some time.';
        this.addSectionForm.reset();
      } else {
        this.msgError = 'Either section anme or code alresdy exists.';
      }


      
    } else {
      this.msgSuccess = '';
      this.msgError = 'There is error while adding section, please try after some time.';
    }
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

  // Open modal to edit Section details
  openEditSectionDialog(row: Section) {
    console.log('row===== ', row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      row
    };
    //this.dialog.open(EditSectionModalComponent, dialogConfig);
    const dialogRef = this.dialog.open(EditSectionModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => {
          console.log("Dialog output:", data);
          if(typeof data !== 'undefined') {
            // Save this data (after return from modal edit) to database

            this.msgSuccess = 'Section details updated successfully.';
            this.msgError = 'There is error while update Section details, please try after some time.';
          } else {
            this.msgSuccess = '';
            this.msgError = 'You saved nothing.';
          }
        }
    );    
  }

  // Open modal to delete Section details
  openDeleteSectionDialog(row: Section) {
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

          this.msgSuccess = 'Section details deleted successfully.';
          this.msgError = 'There is error while delete Section details, please try after some time.';
        } else {
          this.msgSuccess = '';
          this.msgError = '';
        }
      }
    ); 
  }

}
