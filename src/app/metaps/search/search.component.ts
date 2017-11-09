/**
 * Created by andrei on 05.11.2017.
 */
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'search-input',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, Input, Output, OnDestroy {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public length: number;
  @Input() public icon: string;
  @Input() public control: FormControl;
  @Input() public flag: string;
  @Output() public searchEvent: EventEmitter<any> = new EventEmitter();
  private isSubscribe: any;

  constructor() {
  }

  public ngOnInit() {
    this.createControl();
    this.onSubscribeControlChanges();
  }

  public ngOnDestroy() {
    this.isSubscribe.unsubscribe();
  }

  private createControl() {
    if (!this.control) {
      this.control = new FormControl(null);
    }
  }

  private onSubscribeControlChanges() {
    this.isSubscribe = this.control.valueChanges
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search value is same as previous
      .switchMap((value) => {
        if (value) {
          this.searchEvent.emit({
            value,
            flag: this.flag
          });
          /*emit event*/
        }
        return 'str';
      })
      .subscribe();
  }
}
