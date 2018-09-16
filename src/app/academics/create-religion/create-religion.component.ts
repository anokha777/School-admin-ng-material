import { Component, OnInit, ViewChild } from '@angular/core';
import { ReligionModule } from './religion.module';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AcademicsUtils } from '../academics.util';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { EditReligionModalComponent } from './edit-religion-modal/edit-religion-modal.component';

@Component({
  selector: 'app-create-religion',
  templateUrl: './create-religion.component.html',
  styleUrls: ['./create-religion.component.scss']
})
export class CreateReligionComponent implements OnInit {
  msgSuccess: string = '';
  msgError: string = '';
  religionArray: ReligionModule[];

  model: ReligionModule = new ReligionModule(1, '', '', new Date(), new Date(), '');
  @ViewChild('addReligionForm') addReligionForm: NgForm; 

  // table starts
  displayedColumns: string[] = ['id', 'name', 'code',  'createDate', 'createBy', 'edit', 'delete'];
  
  dataSource: MatTableDataSource<ReligionModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private dialog: MatDialog, private academicsUtils: AcademicsUtils ) {
       // Assign the data to the data source for the table to render
       this.religionArray = [
        new ReligionModule(1, 'Religion A', 'A', new Date(), new Date(), 'Anokha'), 
        new ReligionModule(2, 'Religion B', 'B', new Date(), new Date(), 'Banokha'), 
        new ReligionModule(3, 'Religion C', 'C', new Date(), new Date(), 'Canokha'), 
        new ReligionModule(4, 'Religion D', 'D', new Date(), new Date(), 'Danokha'), 
        new ReligionModule(5, 'Religion E', 'E', new Date(), new Date(), 'Eanokha'), 
        new ReligionModule(6, 'Religion F', 'F', new Date(), new Date(), 'Fanokha'), 
        new ReligionModule(7, 'Religion G', 'G', new Date(), new Date(), 'Anokha'), 
        new ReligionModule(8, 'Religion H', 'H', new Date(), new Date(), 'Anokha'), 
        new ReligionModule(9, 'Religion I', 'I', new Date(), new Date(), 'Anokha')
      ];
      
      this.putdataIntoDataSource(this.religionArray);
   }

   putdataIntoDataSource(religionArray: ReligionModule[]){
    this.dataSource = new MatTableDataSource(religionArray);
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

    // Add a new Religion
    addReligion() {
      console.log('this.addReligionForm=== ', this.addReligionForm.value);  
      if (this.addReligionForm.valid) {
        // check if Suject already exists
        if(!this.academicsUtils.findOjectInArrayByProperty(this.religionArray, this.addReligionForm.value.code)
        || !this.academicsUtils.findOjectInArrayByProperty(this.religionArray, this.addReligionForm.value.name)) {
          // now call REST API to save into database
  
  
          const newReligion: ReligionModule = new ReligionModule(this.religionArray.length + 1, 
            this.addReligionForm.value.name, this.addReligionForm.value.code,
            new Date(), new Date(), 'Anokha');
          
    
    
          this.religionArray.push(newReligion);
    
          this.putdataIntoDataSource(this.religionArray);
          
          this.msgSuccess = 'Religion added successfully!';
          this.msgError = 'There is error while adding Religion, please try after some time.';
          this.addReligionForm.reset();
        } else {
          this.msgError = 'Either Religion name or code already exists.';
        }
  
  
        
      } else {
        this.msgSuccess = '';
        this.msgError = 'There is error while adding Religion, please try after some time.';
      }
    }

    // Open modal to edit Religion details
    openEditReligionDialog(row: ReligionModule) {
      console.log('suject modal row===== ', row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      dialogConfig.data = {
        row
      };
      //this.dialog.open(EditReligionModalComponent, dialogConfig);
      const dialogRef = this.dialog.open(EditReligionModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
          data => {
            console.log("Dialog output:", data);
            if(typeof data !== 'undefined') {
              // Save this data (after return from modal edit) to database
  
              this.msgSuccess = 'Religion details updated successfully.';
              this.msgError = 'There is error while update Religion details, please try after some time.';
            } else {
              this.msgSuccess = '';
              this.msgError = 'You saved nothing.';
            }
          }
      );    
    }
  
    // Open modal to delete Religion details
    openDeleteReligionDialog(row: ReligionModule) {
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
  
            this.msgSuccess = 'Religion details deleted successfully.';
            this.msgError = 'There is error while delete Religion details, please try after some time.';
          } else {
            this.msgSuccess = '';
            this.msgError = '';
          }
        }
      ); 
    }

}
