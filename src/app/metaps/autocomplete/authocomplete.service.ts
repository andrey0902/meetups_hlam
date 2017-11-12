/**
 * Created by andrei on 12.11.2017.
 */
import { Injectable } from '@angular/core';
import { AUTO } from '../shared/authocomplete-data';

@Injectable()
export class AuthocompleteService {

  constructor() {
  }

  public getSerchUsers(str: string) {
    str = str.toLowerCase();
    let temp = [];
    AUTO.forEach((user) => {
      if (user.name.toLowerCase().indexOf(str) !== -1) {
        temp.push(user);
      }
    });
    return temp;
  }
}
