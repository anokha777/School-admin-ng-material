import { Injectable } from '@angular/core';
import { AllocateClassTeacherModule } from './allocate-class-teacher.module';

@Injectable({
  providedIn: 'root'
})
export class AllocateClassTeacherUtil {

  constructor() { }

  // find object by property from array of object - function for class teacher allocation 
  // (to check if teacher already assigned to any class.)
  checkClassTeacherAllocated(arr: AllocateClassTeacherModule[], classTeacherName: string, sectionName: string, className: string) {
    let objectExists: boolean = false;
    arr.filter(function (o) {
      if(o.classTeacherName.toUpperCase() === classTeacherName.toUpperCase() ||
      (o.className.toUpperCase() === className.toUpperCase()) && (o.sectionName.toUpperCase() === sectionName.toUpperCase())){
        objectExists = true;
      }
    });
    return objectExists;
  }
}
