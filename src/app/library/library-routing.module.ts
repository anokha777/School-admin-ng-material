import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookCategoryComponent } from './add-book-category/add-book-category.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueOrReturnBookComponent } from './issue-or-return-book/issue-or-return-book.component';

const routes: Routes = [
  {path: 'add-book-category', component: AddBookCategoryComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'issue-or-return-book', component: IssueOrReturnBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
