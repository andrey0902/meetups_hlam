import { ValidatorFn, AbstractControl, FormArray, FormGroup } from '@angular/forms';
/**
 * Created by andrei on 18.11.2017.
 */
export class CustomValidator {
  public static toEqual (name: string): ValidatorFn {
    return (form: AbstractControl ) => {
      const toEqual = {};
      const formArray: any = form.get(name) as FormArray;
      formArray.controls.forEach((item, i) => {
          if (toEqual.hasOwnProperty(item.controls.link.value)) {
            toEqual[item.controls.link.value] += 1;
            item.get('link').setErrors({toEqual: true});
            console.log(')))))', item.get('link') );
          } else {
            toEqual[item.controls.link.value] = 0;
          }
      });
      if (form) {
        return null;
      }
      return null;
    };
  }
}
