/**
 * Created by andrei on 29.10.2017.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../to-do.cervice';
import { ItemModel } from '../item.model';

@Component({
 selector: 'to-do-list',
 templateUrl: 'to-do-list.component.html'
})

export class ToDoListComponent implements OnInit {
 public toDos: ItemModel[];
  constructor(private dataService: DataService) { }

 public ngOnInit() {
   this.getData();
 }
 public deleteItem(todo: ItemModel) {
    let index: number = this.toDos.indexOf(todo);
    if (index >= 0) {
      console.log('DEL go to server delete ');
      this.toDos.splice(index, 1);
    }
 }
  public getData() {
    this.dataService.getData().subscribe((result) => {
      this.toDos = result;
      console.log(result);
    });
  }
}
