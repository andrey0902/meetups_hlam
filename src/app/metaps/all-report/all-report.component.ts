/**
 * Created by andrei on 05.11.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Report } from '../shared/report.model';
import { MzModalService } from 'ng2-materialize/dist';
import { CreateMeetupsModalComponent } from '../create-meetups-modal/create-meetups-modal.component';

@Component({
 selector: 'all-reports',
 templateUrl: './all-report.component.html',
  styleUrls: ['all-report.component.scss']
})

export class AllReportsComponent implements OnInit, Input {
 @Input() public reports: Report[];
  public modalRef: any;
  constructor(private modslService: MzModalService) { }

 ngOnInit() { }
 public getSearch(value) {
    console.log('from component', value);
 }
 public openModal() {
     this.modalRef = this.modslService.open(CreateMeetupsModalComponent);
     this.modalRef.instance.modalComponent.onClose.subscribe((result) => {
       console.log('listening in component button', result);
     });
   }
}
