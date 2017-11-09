/**
 * Created by andrei on 29.10.2017.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemModel } from '../item.model';
@Component({
  selector: 'to-do-item',
  templateUrl: 'to-do-item.component.html',
  styleUrls: ['to-do-item.component.scss']
})
export class  ToDoItemComponent implements Input {
 @Input() public todo: ItemModel;
 @Output() public deleteItem: EventEmitter<ItemModel> = new EventEmitter();
 public toggleCompleted(isCompeted) {
   this.todo.isDone = !isCompeted;
   console.log('patch to server update todo item');
 }
 public delItem() {
   this.deleteItem.emit(this.todo);
 }
}
