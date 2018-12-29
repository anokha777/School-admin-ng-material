import { Injectable } from '@angular/core';
import { ClassPeriodModule } from './class-period.module';


@Injectable({
  providedIn: 'root'
})
export class DefineClassPeriodUtil {

  constructor() { }

  // find object by property from array of object - function for define class period 
  // (to check if period is already exists.)
  checkClassSubjectAssigned(arr: ClassPeriodModule[], classPeriodName: string, classPeriodFrom: string, classPeriodTo:string) {
    let objectExists: boolean = false;
    arr.filter(function (o) {
      if(o.classPeriodName.toUpperCase() === classPeriodName.toUpperCase()
      || o.classPeriodFrom.toUpperCase() === classPeriodFrom.toUpperCase()
      || o.classPeriodTo.toUpperCase() === classPeriodTo.toUpperCase()){
        objectExists = true;
      }
    });
    return objectExists;
  }
}
