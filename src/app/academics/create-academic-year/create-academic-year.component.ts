import { Component, OnInit, ViewChild } from '@angular/core';
import { AcademicYearModule } from './academicyear.module';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FullMonthName } from '../../static-data/months';

@Component({
  selector: 'app-create-academic-year',
  templateUrl: './create-academic-year.component.html',
  styleUrls: ['./create-academic-year.component.scss']
})
export class CreateAcademicYearComponent implements OnInit {
  msgSuccess: string = '';
  msgError: string = '';
  academicYearArray: AcademicYearModule[];
  fullMonthName = FullMonthName;
  
  model: AcademicYearModule = new AcademicYearModule(1, '', '', '', '', new Date(), new Date(), '');
  @ViewChild('addAcademicYearForm') addAcademicYearForm: NgForm; 

  // table starts
  displayedColumns: string[] = ['id', 'academicYearName', 'academicStartYearMonth', 'academicEndYearMonth', 'createDate', 'createBy', 'edit'];
  
  dataSource: MatTableDataSource<AcademicYearModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

}
