import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator,ValidatorFn, AbstractControl, Validators, NG_VALIDATORS } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } => {

     // messy but you get the idea
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': 'value is only whitespace' }

  }; 
}
 
@Directive({
    selector: '[myNoSpaces]',
    providers: [{ provide: NG_VALIDATORS, useExisting: IdValidatorDirective, multi: true }]
})
export class IdValidatorDirective implements Validator {

    private valFn = NoWhitespaceValidator();
    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}






/*import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, ValidatorFn, AbstractControl, Validators, NG_VALIDATORS } from '@angular/forms';

 
export function adultFromId(outId: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const id = control.value;
    //const no = (id==1234);
    console.log("adultFromId(outId: number) :::1- ", outId);
    console.log("control ::: 2- ", control);
    console.log("", );
    return true ? {'forbiddenName': 1234} : null;
  };
}

@Directive({
    selector: '[adult]',
    providers: [{ provide: NG_VALIDATORS, useExisting: IdValidatorDirective, multi: true }]
})
export class IdValidatorDirective implements Validator {
  @Input() forbiddenName: string;
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['adult'];
    if (change) {
      const id: number = change.currentValue;
      this.valFn = adultFromId(id);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: number]: any} {
    return this.valFn(control);
  }
}*/