/**
 * Created by andrei on 30.10.2017.
 */
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HelperService } from './helper.cervise';

@Component({
 selector: 'auto-complete',
 templateUrl: 'auto-complete.component.html',
  styleUrls: ['auto-complete.component.scss'],
  providers: [HelperService]
})

export class AutoCompleteComponent implements OnInit, Input, OnChanges {
  public isSelect: boolean;
  public listMatch: Array<{id: number, name: string, lastName: string}> = [];
  @Input() public data: Array<{id: number, name: string, lastName: string}>;
  @Input() public valueSearch: HTMLInputElement;
 constructor(private helper: HelperService) { }

 public ngOnChanges() {
   console.log(this.valueSearch);
 }

 public ngOnInit() {
   this.valueSearch.addEventListener('keyup' , (e: Event) => {
     this.isSelect = true;
     console.log((<HTMLInputElement> e.target).value);
     console.log('res', this.listMatch = this.helper.getMatch(this.data, (<HTMLInputElement> e.target).value));;
   });
   this.isSelect = true;
   console.log(this.valueSearch);
   console.log(this.data);
 }
 public handler(item) {
   this.isSelect = false;
   let event = document.createEvent('KeyboardEvent');
   this.valueSearch.value = item.name;

   console.log(item);
 }
}
