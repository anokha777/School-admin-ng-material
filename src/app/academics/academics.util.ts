import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AcademicsUtils {

    constructor() { }

    // find object by property from array of object - function for section creation (to check if section already exists.)
    findOjectInArrayByProperty(arr, value) {
        let sectionExists: boolean = false;
        arr.filter(function (o) {
            if (o.name.toUpperCase() === value.toUpperCase()) {
                sectionExists = true;
            } else if (o.code.toUpperCase() === value.toUpperCase()) {
                sectionExists = true;
            }
        });
        return sectionExists;
    }

}