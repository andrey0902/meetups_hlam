/**
 * Created by andrei on 30.10.2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  public getMatch(data: any[], value: string) {
    let temp = [];
    data.forEach((elem) => {
      console.log(this.match(elem.name, value));
      if(this.match(elem.name, value)) {
        temp.push ({
          id: elem.id,
          name: elem.name,
          subName: this.replace(elem.name, value)
        });
      }
    });
    return temp;
  }
  private replace(str, word) {
    let reg = new RegExp('(' + word + ')', 'ig');
    return str.replace(reg, '<span class="higlight">$1</span>');
  }
  private match(str, word) {
    let regexp =  new RegExp(word, 'i');
    return (str.search(regexp) !== -1) ? true : false;
  }
}
