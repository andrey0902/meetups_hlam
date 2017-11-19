/**
 * Created by andrei on 18.11.2017.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { CustomDataService } from './custom.data';

@Component({
  selector: 'create-meetups-modal',
  templateUrl: 'create-meetups-modal.component.html',
  styleUrls: ['create-meetups-modal.component.scss']
})

export class CreateMeetupsModalComponent extends MzBaseModal implements OnInit {
  public createMeetupsForm: FormGroup;
  public usersArray: FormArray;
  public isCommet: boolean;
  @ViewChild('modal') public modal: MzModalComponent;
  constructor(private customData: CustomDataService) {
    super();
    this.isCommet = false;
  }

  public ngOnInit() {
    this.createForm();
    this.createMeetupsForm.get('status')
      .valueChanges.subscribe((value) => {
      /*this i need call the method this.addControlComments()*/
        console.log('value is deferred', value);
        if (value === 'deferred') {
          this.addControlComments();
        }
    });
  }

  public onSubmit(form: FormGroup) {
    console.log('make to request for create report', form.value);
    if (form.valid) {
      this.modal.onClose.emit(form.value);
      this.modal.close();
      console.log('make to request for create report');
    }
  }

  public createForm() {
    this.usersArray = this.createFormArray();
    this.createMeetupsForm = new FormGroup({
      topic: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(70)]),
      users: this.usersArray,
      status: new FormControl(null, [Validators.required])
    });
  }

  public addControlComments() {
    this.isCommet = true;
    this.createMeetupsForm.setControl(
      'comment', this.createControlComment()
    );
  }

  public createControlComment() {
    return new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(70)
    ]);
  }

  public createFormArray() {
    return new FormArray([this.createFormGroup()]);
  }

  public createFormGroup() {
    return new FormGroup({
      name: new FormControl(null),
      id: new FormControl(null)
    });
  }
}
