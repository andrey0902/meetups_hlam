/**
 * Created by andrei on 19.11.2017.
 */
/**
 * Created by andrei on 12.11.2017.
 */
import { Injectable } from '@angular/core';
import { AUTO } from '../shared/authocomplete-data';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs/observable/of';
@Injectable()
export class AuthocompleteService2 {
  private isSubject: Subject<any> = new Subject();
  constructor() {
  }

  public getSerchUsers(str: string): Observable<Response> {
    str = str.toLowerCase();
    let temp = [];
    AUTO.forEach((user) => {
      if (user.name.toLowerCase().indexOf(str) !== -1) {
        temp.push(user);
      }
    });
    this.isSubject.next(temp);
    return this.isSubject.asObservable();
  }
}
