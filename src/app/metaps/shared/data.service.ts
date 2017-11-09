/**
 * Created by andrei on 05.11.2017.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getReports(): Observable<Report[] | any> {
   return this.http.get('app/metaps/shared/data.json')
      .map((result) => {
        console.log(result);
        return this.createModel(result);
      }).catch((result) => {
      console.info(result);
      return result;
    });
  }
  private createModel (reports) {
    let temp: Report[] = [];
    if (reports) {
      reports.forEach((report) => {
        temp.push(new Report(report));
      });
    }
    return temp;
  }
}
