import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
 public getQuestions() {

    let questions: Array<QuestionBase<any>> = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating1111',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        type: 'text',
        required: true,
        maxLength: 5,
        minLength: 1,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        minLength: 3,
        order: 2
      }),
      new TextboxQuestion({
        key: 'password',
        label: 'Password',
        type: 'password',
        minLength: 3,
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
