/**
 * Created by andrei on 02.11.2017.
 */
export class QuestionBase<T> {
 public value: T;
 public key: string;
 public label: string;
 public required: boolean;
 public maxLength: number;
 public minLength: number;
 public order: number;
 public controlType: string;
 private test: any;

  constructor(options: {
                value?: T,
                key?: string,
                label?: string,
                required?: boolean,
                order?: number,
                controlType?: string,
                maxLength?: number,
                minLength?: number
              } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.test = options.maxLength ? this.maxLength = options.maxLength : '';
    this.test = options.minLength ?  this.minLength = options.minLength : '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
