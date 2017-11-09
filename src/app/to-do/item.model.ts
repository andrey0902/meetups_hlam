/**
 * Created by andrei on 28.10.2017.
 */
export class ItemModel {
  public isDone: boolean;
  public title: string;
  public id: number;
  public isEditable: boolean;
  constructor(data) {
    this.isDone = data.isDone;
    this.title = data.title;
    this.id = data.id;
    this.isEditable = false;
  }
}
