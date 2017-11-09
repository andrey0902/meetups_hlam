/**
 * Created by andrei on 02.11.2017.
 */
import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  public controlType = 'textbox';
  public type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
