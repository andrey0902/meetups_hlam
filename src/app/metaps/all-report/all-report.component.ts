/**
 * Created by andrei on 05.11.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Report } from '../shared/report.model';

@Component({
 selector: 'all-reports',
 templateUrl: './all-report.component.html',
  styleUrls: ['all-report.component.scss']
})

export class AllReportsComponent implements OnInit, Input {
 @Input() public reports: Report[];
  constructor() { }

 ngOnInit() { }
 public getSearch(value) {
    console.log('from component', value);
 }
}
