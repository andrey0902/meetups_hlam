/**
 * Created by andrei on 29.10.2017.
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit, Output {
  public formTodo: FormGroup;
  public dataAuto = [
    {id: 1, name: 'Andree', lastName: 'Pavlov'},
    {id: 2, name: 'Andree2', lastName: 'Pavlov1'},
    {id: 3, name: 'Andree3', lastName: 'Pavlov2'},
    {id: 4, name: 'Andree4', lastName: 'Pavlov3'},
    {id: 5, name: 'tel', lastName: 'min'},
    {id: 6, name: 'test', lastName: 'test'},
  ]
  @Output() public add = new EventEmitter();
  public ngOnInit( ) {
    this.createForm();
  }
  public submitForm(form: FormGroup, element) {
    console.log(form, element);
    if (form.valid) {
      this.add.emit(form.value);
      form.reset();
    }
  }
  private createForm() {
    this.formTodo = new FormGroup(
      {
        title: new FormControl(null, [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(2)
        ]),
      }
    );
  }

}
