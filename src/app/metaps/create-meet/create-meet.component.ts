/**
 * Created by andrei on 05.11.2017.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Report } from '../shared/report.model';

@Component({
 selector: 'create-meet',
 templateUrl: 'create-meet.component.html',
  styleUrls: ['create-meet.component.scss']
})

export class CreateMeetComponent implements OnInit {
  public reports: Report[];
  public selectReports: Report[] = [];
 constructor(private dataService: DataService) { }

 public ngOnInit() {
   this.getData();
 }
 public getData() {
   this.dataService.getReports().subscribe((result) => this.reports = result);
 }
 public toggleReports($event: Event, report) {
   ($event.target as HTMLInputElement).checked ? this.addReport(report) : this.removeReport(report);
   console.log('$event,', $event);
 }
 private addReport(report) {
   this.selectReports.push(report);
   console.log('this.selectReports+', this.selectReports);
 }
 private removeReport(report) {
   let index = this.selectReports.indexOf(report);
   if (index) {
     this.selectReports.splice(index, 1);
   }
   console.log('this.selectReports-', this.selectReports);
 }
}
