/**
 * Created by andrei on 26.10.2017.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from './to-do.cervice';
import { ItemModel } from './item.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { el } from '@angular/platform-browser/testing/src/browser_util';

@Component({
 selector: 'to-do',
 templateUrl: 'to-do.component.html',
 styleUrls: ['to-do.component.scss']
})

export class ToDoComponent implements OnInit {
  public title: string = 'This is To do List';
  public isEditable: boolean = false;
  public isChecked: boolean;
  public addToDo: boolean = false;
  public sad: boolean = false;
  public data = [];
  public options = [
    {value: 1, name: 'Chebyr', isSad: false},
    {value: 2, name: 'Gena', isSad: true},
    {value: 3, name: 'Petay', isSad: true},
    {value: 4, name: 'Lena', isSad: false},
    ];
  private person = [{value: 5, name: 'DDDDD', isSad: true},
    {value: 6, name: 'Time', isSad: false}];

  constructor(private dataService: DataService) { }
 public ngOnInit() {
    this.data = [...this.options, ...this.person];
 }
 public addToDoInList(toDo) {
   this.addToDo = false;
   this.dataService.addToList(toDo);
   console.log(toDo);
 }

}
