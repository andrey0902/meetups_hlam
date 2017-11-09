/**
 * Created by andrei on 01.11.2017.
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myOppositeNgIf]' })
export class OppositeNgIfDirective  implements Input {
  private hasView: boolean = false;
 constructor(private templateReferens: TemplateRef<any>,
             private viewContainer: ViewContainerRef ) { }
  @Input() set myOppositeNgIf (value: boolean) {
    if (!value && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateReferens);
        this.hasView = true;
    }else if (value && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
