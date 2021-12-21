import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }


  // validate(control: AbstractControl): ValidationErrors | null {
  //   console.log(1,control.value);
  // if((control.value.address && control.value.city && control.value.country)) {
  //   console.log('hurrey');
  //         return null;
  //   } else {
  //     return {validateLocation: false};
  //   }
  // }

  validate(formGroup: FormGroup): {[key: string]: any} {
   
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if((addressControl && addressControl.value  && cityControl && cityControl.value && 
      countryControl && countryControl.value) ||
     (onlineUrlControl && onlineUrlControl.value)) {
          return null;
    } else {
      return {validateLocation: false};
    }
  }

}
