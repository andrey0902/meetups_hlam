/**
 * Created by andrei on 30.10.2017.
 */
import { NgModule } from '@angular/core';

import { AutoCompleteComponent } from './component/autho-complete/auto-complete.component';
import { CommonModule } from '@angular/common';
import { OppositeNgIfDirective } from './directives/oposit-ng-if.directive';

@NgModule({
 imports: [CommonModule],
 exports: [
   AutoCompleteComponent,
   OppositeNgIfDirective,
 ],
 declarations: [
   AutoCompleteComponent,
   OppositeNgIfDirective,
 ],
 providers: [],
})
export class SharedModule { }
