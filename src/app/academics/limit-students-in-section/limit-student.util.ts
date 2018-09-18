import { Injectable } from '@angular/core';
import { LimitStudentModule } from './limit-student.module';

@Injectable({
  providedIn: 'root'
})
export class LimitStudentUtil {

  constructor() { }

  // find object by property from array of object - function for student limit creation 
  // (to check if student limit already exists.)
  checkLimitsExists(arr: LimitStudentModule[], className: string, sectionName: string) {
    let objectExists: boolean = false;
    arr.filter(function (o) {
      if(o.className.toUpperCase() === className.toUpperCase() && 
      o.sectionName.toUpperCase() === sectionName.toUpperCase()){
        objectExists = true;
      }
    });
    return objectExists;
  }
}
