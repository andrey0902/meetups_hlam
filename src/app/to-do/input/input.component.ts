/**
 * Created by andrei on 02.11.2017.
 */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validators';

@Component({
  selector: 'test-myinput',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})

export class InputComponent implements OnInit {
  public myForm: FormGroup;
  private formFiles: FormArray;

  constructor() {
  }

  public ngOnInit() {
    this.createForm();
    console.log('this.myForm', this.myForm);
    console.log('this.formFiles', this.formFiles);
  }

  public createForm() {
    this.formFiles = this.createFormArray();
    this.myForm = new FormGroup({
      files: this.formFiles
    },  CustomValidator.toEqual('files') );
  }

  public createFormArray() {
    return new FormArray([
      this.myFormGroup
    ]);
  }
  public addInputFile() {
    this.formFiles.push(this.myFormGroup);
  }
  get myFormControll() {
    return new FormControl(null, [
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.required]);
  }
  get typeFile () {
    return new FormControl(null, [
      Validators.required
    ]);
  }
  get myFormGroup() {
    return new FormGroup({
      link: this.myFormControll,
      type: this.typeFile
    });
  }
  public onSubmit(myForm: FormGroup) {
    console.log(myForm);
  }
}
