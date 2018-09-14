import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { AddBookCategoryComponent } from './add-book-category/add-book-category.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueOrReturnBookComponent } from './issue-or-return-book/issue-or-return-book.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [AddBookCategoryComponent, AddBookComponent, IssueOrReturnBookComponent]
})
export class LibraryModule { }
