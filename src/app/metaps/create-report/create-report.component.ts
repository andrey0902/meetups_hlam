/**
 * Created by andrei on 06.11.2017.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
 selector: 'create-report',
 templateUrl: './create-report.component.html'
})

export class CreateReportComponent extends MzBaseModal implements OnInit {
  public formCreateReport: FormGroup;
  @ViewChild('modal') public modal: MzModalComponent;
 constructor() {
   super();
 }

 public ngOnInit() {
   this.createForm();
 }
 public createForm() {
   this.formCreateReport = new FormGroup({
     name: new FormControl(null, [
       Validators.required,
       Validators.minLength(3),
       Validators.maxLength(30)
     ])
   });
 }
 public onSubmit(form: FormGroup) {
   if (form.valid) {
     this.modal.onClose.emit(form.value);
     this.modal.close();
     console.log('make to request for create report');
   }
 }
  public resetForm() {
    this.formCreateReport.reset();
  }
}
