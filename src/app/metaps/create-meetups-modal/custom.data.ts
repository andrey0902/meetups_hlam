/**
 * Created by andrei on 19.11.2017.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterData, CompleterItem } from 'ng2-completer';
import { AuthocompleteService2 } from './autho-complete.service';

@Injectable()
export class CustomDataService extends Subject<CompleterItem[]> implements CompleterData {
 constructor(private service: AuthocompleteService2) {
   super();
 }
  public search(term: string): void {
    console.log('searched for :' + term);
    this.service.getSerchUsers(term)
      .map((res: Response) => {
        // Convert the result to CompleterItem[]
        let data: any = res;
        console.log('data11111', data);
        let matches: CompleterItem[] = data.map((episode: any) => this.convertToItem(episode));
        this.next(matches);
      })
      .subscribe();
  }

  public cancel() {
    // Handle cancel
  }

  public convertToItem(data: any): CompleterItem | null {
    if (!data) {
      return null;
    }
    // data will be string if an initial value is set
    return {
      title: data.name,
      image : data.Picture,
      originalObject: data
    } as CompleterItem;
  }
}
