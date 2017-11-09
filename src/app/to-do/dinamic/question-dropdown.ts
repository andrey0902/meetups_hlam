/**
 * Created by andrei on 02.11.2017.
 */
import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  public controlType = 'dropdown';
  public options: Array<{key: string, value: string}> = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
