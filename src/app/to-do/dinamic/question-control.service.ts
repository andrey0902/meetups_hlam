/**
 * Created by andrei on 02.11.2017.
 */
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {

  public toFormGroup(questions: Array<QuestionBase<string>> ) {
    let group: any = {};

    questions.forEach( (question) => {
       group[question.key] =  new FormControl(question.value || '', this.checkValidation(question));
    });
    return new FormGroup(group);
  }
  public checkValidation(obj: {}) {
    let temArrayValidation = [];
    let test: any;
    let availableValidator: [string] = ['required', 'maxLength', 'minLength'];
    for (let value of availableValidator) {
     test = obj.hasOwnProperty(value) ? console.log(value) : '';
     test = obj.hasOwnProperty(value) && value === 'required' ?
       temArrayValidation.push(Validators[value]) :
       obj.hasOwnProperty(value) ?  temArrayValidation.push(Validators[value](obj[value])) : '';
    }
    return temArrayValidation;
  }
}
