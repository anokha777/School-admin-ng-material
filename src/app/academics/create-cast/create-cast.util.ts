import { Injectable } from '@angular/core';
import { CastModule } from './cast.module';

@Injectable({
  providedIn: 'root'
})
export class CreateCastUtil {

  constructor() { }

  // find object by property from array of object - function for section creation (to check if section already exists.)
  checkCastExists(arr: CastModule[], castName: string) {
    let castExists: boolean = false;
    arr.filter(function (o) {
      if(o.castName.toUpperCase() === castName.toUpperCase()){
        castExists = true;
      }
    });
    return castExists;
  }
}
