import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() public questions: Array<QuestionBase<any>> = [];
 public form: FormGroup;
 public payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

 public ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

 public onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
