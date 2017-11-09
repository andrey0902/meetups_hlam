import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from './question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() public question: QuestionBase<any>;
  @Input() public form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
