/**
 * Created by andrei on 05.11.2017.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Report } from '../shared/report.model';

@Component({
 selector: 'create-subject',
 templateUrl: 'create-subject.component.html'
})

export class CreateSubjectComponent implements OnInit {
  public reports: Report[];
  public messageText: string = '';
  public messageText2: string = '';
  constructor(private dataService: DataService) { }

  public ngOnInit() {
    this.getData();
  }
  public getData() {
    this.dataService.getReports().subscribe((result) => {
      this.messageText = this.formatToString(result, false);
      this.messageText2 = this.formatToString(result, 2);
    });
  }
  private formatToString(reports: Report[], flag) {
    let str = '';
    reports.forEach((report, i) => {
      if (flag) {
        str += report.topic + ' ' + this.addUser(report.users) + '\n';
      }else {
        str += `<p>${report.topic + ' ' + this.addUser(report.users)}</p>` ;
      }
    });
    return str;
  }
  private addUser(users) {
    let temp = '';
    users.forEach((user, i) => {
      let split =  i < users.length - 1 ? ',' : '';
      temp += `${user.first_name} ${user.last_name}${split}`;
    });
    return temp;
  }
}
