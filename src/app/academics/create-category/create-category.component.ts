import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryModule } from './category.module';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { AcademicsUtils } from '../academics.util';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { EditCategoryModalComponent } from './edit-category-modal/edit-category-modal.component';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  msgSuccess: string = '';
  msgError: string = '';
  categoryArray: CategoryModule[];

  model: CategoryModule = new CategoryModule(1, '', '', new Date(), new Date(), '');
  @ViewChild('addCategoryForm') addCategoryForm: NgForm; 

  // table starts
  displayedColumns: string[] = ['id', 'name', 'code',  'createDate', 'createBy', 'edit', 'delete'];
  
  dataSource: MatTableDataSource<CategoryModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private dialog: MatDialog, private academicsUtils: AcademicsUtils ) { 
    // Assign the data to the data source for the table to render
    this.categoryArray = [
      new CategoryModule(1, 'Category A', 'A', new Date(), new Date(), 'Anokha'), 
      new CategoryModule(2, 'Category B', 'B', new Date(), new Date(), 'Banokha'), 
      new CategoryModule(3, 'Category C', 'C', new Date(), new Date(), 'Canokha'), 
      new CategoryModule(4, 'Category D', 'D', new Date(), new Date(), 'Danokha'), 
      new CategoryModule(5, 'Category E', 'E', new Date(), new Date(), 'Eanokha'), 
      new CategoryModule(6, 'Category F', 'F', new Date(), new Date(), 'Fanokha'), 
      new CategoryModule(7, 'Category G', 'G', new Date(), new Date(), 'Anokha'), 
      new CategoryModule(8, 'Category H', 'H', new Date(), new Date(), 'Anokha'), 
      new CategoryModule(9, 'Category I', 'I', new Date(), new Date(), 'Anokha')
    ];
    
    this.putdataIntoDataSource(this.categoryArray);
  }
 
  putdataIntoDataSource(categoryArray: CategoryModule[]){
    this.dataSource = new MatTableDataSource(categoryArray);
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

    // Add a new Category
    addCategory() {
      console.log('this.addCategoryForm=== ', this.addCategoryForm.value);  
      if (this.addCategoryForm.valid) {
        // check if Suject already exists
        if(!this.academicsUtils.findOjectInArrayByProperty(this.categoryArray, this.addCategoryForm.value.code)
        || !this.academicsUtils.findOjectInArrayByProperty(this.categoryArray, this.addCategoryForm.value.name)) {
          // now call REST API to save into database
  
  
          const newCategory: CategoryModule = new CategoryModule(this.categoryArray.length + 1, 
            this.addCategoryForm.value.name, this.addCategoryForm.value.code,
            new Date(), new Date(), 'Anokha');
          
    
    
          this.categoryArray.push(newCategory);
    
          this.putdataIntoDataSource(this.categoryArray);
          
          this.msgSuccess = 'Category added successfully!';
          this.msgError = 'There is error while adding Category, please try after some time.';
          this.addCategoryForm.reset();
        } else {
          this.msgError = 'Either Category name or code already exists.';
        }
  
  
        
      } else {
        this.msgSuccess = '';
        this.msgError = 'There is error while adding Category, please try after some time.';
      }
    }

    // Open modal to edit Category details
    openEditCategoryDialog(row: CategoryModule) {
      console.log('suject modal row===== ', row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      dialogConfig.data = {
        row
      };
      //this.dialog.open(EditCategoryModalComponent, dialogConfig);
      const dialogRef = this.dialog.open(EditCategoryModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
          data => {
            console.log("Dialog output:", data);
            if(typeof data !== 'undefined') {
              // Save this data (after return from modal edit) to database
  
              this.msgSuccess = 'Category details updated successfully.';
              this.msgError = 'There is error while update Category details, please try after some time.';
            } else {
              this.msgSuccess = '';
              this.msgError = 'You saved nothing.';
            }
          }
      );    
    }
  
    // Open modal to delete Category details
    openDeleteCategoryDialog(row: CategoryModule) {
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
  
            this.msgSuccess = 'Category details deleted successfully.';
            this.msgError = 'There is error while delete Category details, please try after some time.';
          } else {
            this.msgSuccess = '';
            this.msgError = '';
          }
        }
      ); 
    }
}
