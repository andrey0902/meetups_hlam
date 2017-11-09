/**
 * Created by andrei on 09.11.2017.
 */
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({selector: '[toggle]'})
export class ToggleDirective implements OnChanges{
  public element: ElementRef;
  @Input() public flag: boolean;

  constructor(el: ElementRef) {
    this.element = el;
    let data = el.nativeElement.querySelectorAll('a');
    console.log(data, el.nativeElement);
  }

 public ngOnChanges() {
    if (this.flag) {
     let a = this.element.nativeElement.querySelectorAll('a[class="active"]');
     setTimeout(() => {
       a[0].click();
     }, 150);
     console.log('aaaa', a);
    }
  }
}
