/**
 * Created by andrei on 06.11.2017.
 */
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MzModalComponent, MzModalService } from 'ng2-materialize';
import { CreateReportComponent } from '../../create-report/create-report.component';
@Component({
 selector: 'modal-button',
 templateUrl: './modal-tregger.component.html'
})

export class ModalTreggerComponent  {
  public modalRef: any;
 constructor(private modslService: MzModalService) { }
  public openModal() {
   this.modalRef = this.modslService.open(CreateReportComponent);
   this.modalRef.instance.modalComponent.onClose.subscribe((result) => {
     console.log('listening in component button', result);
   });
  }
}
