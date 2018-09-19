import { Injectable } from '@angular/core';
import { ClassSubjectAssignModule } from './class-subject-assign.model';

@Injectable({
  providedIn: 'root'
})
export class ClassSubjectAssignUtil {

  constructor() { }

  // find object by property from array of object - function for class subject assign 
  // (to check if class has already add subject.)
  checkClassSubjectAssigned(arr: ClassSubjectAssignModule[], className: string) {
    let objectExists: boolean = false;
    arr.filter(function (o) {
      if(o.className.toUpperCase() === className.toUpperCase()){
        objectExists = true;
      }
    });
    return objectExists;
  }
}
