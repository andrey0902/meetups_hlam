/**
 * Created by andrei on 28.10.2017.
 */
import { Injectable } from '@angular/core';
import { ItemModel } from './item.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private data: ItemModel[] = [];
  private dataArray = [
    {id: 1,
     title: 'stady English',
    isDone: false
    },
    {id: 2,
      title: 'stady angular 4',
      isDone: false
    },
    {id: 65,
      title: 'wake up',
      isDone: true
    },
    {id: 44,
      title: 'wake up',
      isDone: true
    }];
  public getData () {
    return this.getArray().map((result) => {
      this.data.push(new ItemModel(result));
      return this.data;
    });
  }
  public addToList(value): ItemModel[] {
    this.data.push(new ItemModel({
      title: value.title,
      isDone: value.isDone ? value.isDone : false,
      id: this.createId()
    }));
    return this.data;
  }
  private createId() {
    if (!this.data.length) {
      return 0;
    }
    let arrayId: number[] = [];
    arrayId = this.data.map((element) => {
     return element.id;
    });
    arrayId.sort((a, b) => {
      return a - b;
    });
    console.log(arrayId[arrayId.length - 1] + 1);
    return arrayId[arrayId.length - 1] + 1;
  }
  private getArray () {
    return Observable.from(this.dataArray);
  }
}
