import { Injectable } from '@angular/core';
import { CreateClassTimetableModule } from './create-class-timetable.nodule';

@Injectable({
  providedIn: 'root'
})
export class CreateClassTimetableUtil {

  constructor() { }

  // find object by property from array of object - function for class timetable creation 
  // (to check if class timetable already exists.)

  checkLimitsExists(arr: CreateClassTimetableModule[], className: string, 
    sectionName: string, subjectName:string, teacherName:string, periodName:string) {
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
