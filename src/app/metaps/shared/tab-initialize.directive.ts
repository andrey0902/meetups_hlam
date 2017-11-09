/**
 * Created by andrei on 09.11.2017.
 */
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[tab-init]' })
export class TabInitializeDirective implements OnInit{
 constructor(private el: ElementRef) { }
 public ngOnInit () {

   setTimeout(() => {
     console.log('   $(this.el).tabs();', $(this.el.nativeElement));
     $(this.el.nativeElement).tabs();
   }, 200);
 }
}
