/**
 * Created by andrei on 05.11.2017.
 */
import { Component, OnInit } from '@angular/core';
import { Report } from './shared/report.model';
import { DataService } from './shared/data.service';
import 'materialize-css';
@Component({
 selector: 'metaps',
 templateUrl: 'metaps.component.html',
  styleUrls: ['metaps.component.scss']
})

export class MetapsComponent implements OnInit {
  public _reports: Report[];
 constructor(private dataService: DataService) { }

 public ngOnInit() {
   this.getReports();
 }
  public isTest() {

  }

 private getReports() {
    this.dataService.getReports().subscribe((result) => {
      console.log('result in component', result);
      this.reports = result;
    });
 }
 public set reports(value: Report[]) {
   if (value.length) {
     this._reports = value;
   }
 }
 public get reports () {
   return this._reports;
 }
}
